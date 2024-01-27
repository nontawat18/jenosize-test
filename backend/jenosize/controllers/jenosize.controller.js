const axios = require('axios');
const admin = require('firebase-admin')
const credentials = require('../login-with-firebase-6c6f9-firebase-adminsdk-5cisb-1dfa3e3d3d.json')
const apiKeyMiddleware = require('../middleware/apikey-middleware');


admin.initializeApp({
    credential: admin.credential.cert(credentials),
    databaseURL: 'https://login-with-firebase-6c6f9.firebaseio.com'

})
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];



const getPlace = async(req, res) => {
    const key = "AIzaSyDOYQXThcXdeYVE0WpBXAxg-14mddzS0tc"

    try {
        const place = req.body.place
        const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&type=restaurant&key=${key}`
        )
        res.json(data)
    } catch (err) {
        next(err)
    }

};

const game24 = (req, res) => {
    const { numbers } = req.body;

    if (!numbers || numbers.length !== 4) {
        return res.status(400).json({ error: 'Please provide exactly 4 numbers.' });
    }

    if (numbers.some(num => num < 1 || num > 9)) {
        return res.status(400).json({ error: 'Numbers must be between 1 and 9.' });
    }

    const canMake24 = (nums) => {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < 0.0001;
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    const remaining = nums.filter((_, index) => index !== i && index !== j);
                    if (canMake24([...remaining, nums[i] + nums[j]])) return true;
                    if (canMake24([...remaining, nums[i] - nums[j]])) return true;
                    if (canMake24([...remaining, nums[i] * nums[j]])) return true;
                    if (nums[j] !== 0 && canMake24([...remaining, nums[i] / nums[j]])) return true;
                }
            }
        }

        return false;
    };

    const result = canMake24(numbers);
    res.json({ result: result ? 'YES' : 'NO' });
};

const signup = async(req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    const userResponse = await admin.auth().createUser({
        email: user.email,
        password: user.password,
        emailVerified: false,
        disabled: false
    });
    res.json(userResponse)
};

const boardBotGame = (apiKeyMiddleware, (req, res) => {
    res.json({ board });
})

const moveBotGame = ((req, res, next) => {
        req.exemptFromApiKeyValidation = true;
        next();
    },
    (req, res) => {
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

        const { row, col, player } = req.body;
        console.log(player)

        if (player !== 'X' && player !== 'O') {
            return res.status(400).json({ error: 'Invalid player' });
        }
        if (board[row][col] === '') {
            board[row][col] = player;
            const winner = checkWinner();
            if (winner === 'X') {
                res.json({ message: 'Player X wins!', board });
                clearBoard();
            } else if (winner === 'O') {
                res.json({ message: 'Player O wins!', board });
                clearBoard();
            } else if (winner === 'Draw') {
                res.json({ message: 'It\'s a draw!', board });
                clearBoard();
            } else {
                const botMove = botPlay();
                if (botMove) {
                    board[botMove.row][botMove.col] = 'O';
                    const botWinner = checkWinner();
                    if (botWinner === 'O') {
                        res.json({ message: 'Bot wins!', board });
                        clearBoard();
                    } else if (botWinner === 'Draw') {
                        res.json({ message: 'It\'s a draw!', board });
                        clearBoard();
                    } else {
                        res.json({ message: 'Player X\'s turn', board });
                    }
                } else {
                    res.status(500).json({ error: 'Error in bot play' });
                }
            }
        } else {
            res.status(400).json({ error: 'Invalid move' });
        }
    })

function clearBoard() {
    // Reset the board to an empty state
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            return board[i][0];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
            return board[0][i];
        }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
        return board[0][2];
    }

    let draw = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                draw = false;
                break;
            }
        }
    }
    if (draw) {
        return 'Draw';
    }

    return '';
}

function botPlay() {
    const availableMoves = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                availableMoves.push({ row: i, col: j });
            }
        }
    }
    if (availableMoves.length > 0) {
        const randomMove = Math.floor(Math.random() * availableMoves.length);
        return availableMoves[randomMove];
    }
    return null;
}

module.exports = { getPlace, game24, signup, boardBotGame, moveBotGame }
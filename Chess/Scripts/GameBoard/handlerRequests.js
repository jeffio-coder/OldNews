﻿var requests = {
    playerMoveNumber: 0,
    gameOver: false,
    currentPlayer: '',
    currentOpponent: '',

    setGameOver: function() {

        this.gameOver = true;
    },

    getSquaresAndPieces: function() {
        var squaresAndPieces = {
            squares: {
                '81': { 'color': 'white', 'pieceId': 'BQR', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {}, possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '82': { 'color': 'black', 'pieceId': 'BQN', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '83': { 'color': 'white', 'pieceId': 'BQB', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '84': { 'color': 'black', 'pieceId': 'BQ', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '85': { 'color': 'white', 'pieceId': 'BK', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '86': { 'color': 'black', 'pieceId': 'BKB', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '87': { 'color': 'white', 'pieceId': 'BKN', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '88': { 'color': 'black', 'pieceId': 'BKR', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '71': { 'color': 'black', 'pieceId': 'BP1', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '72': { 'color': 'white', 'pieceId': 'BP2', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '73': { 'color': 'black', 'pieceId': 'BP3', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '74': { 'color': 'white', 'pieceId': 'BP4', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '75': { 'color': 'black', 'pieceId': 'BP5', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '76': { 'color': 'white', 'pieceId': 'BP6', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '77': { 'color': 'black', 'pieceId': 'BP7', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '78': { 'color': 'white', 'pieceId': 'BP8', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '61': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '62': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '63': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '64': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '65': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '66': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '67': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '68': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '51': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '52': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '53': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '54': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '55': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '56': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '57': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '58': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '41': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '42': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '43': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '44': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '45': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '46': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '47': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '48': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '31': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '32': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '33': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '34': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '35': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '36': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '37': { 'color': 'black', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '38': { 'color': 'white', 'pieceId': '', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '21': { 'color': 'white', 'pieceId': 'WP1', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '22': { 'color': 'black', 'pieceId': 'WP2', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '23': { 'color': 'white', 'pieceId': 'WP3', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '24': { 'color': 'black', 'pieceId': 'WP4', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '25': { 'color': 'white', 'pieceId': 'WP5', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '26': { 'color': 'black', 'pieceId': 'WP6', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '27': { 'color': 'white', 'pieceId': 'WP7', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '28': { 'color': 'black', 'pieceId': 'WP8', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },

                '11': { 'color': 'black', 'pieceId': 'WQR', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '12': { 'color': 'white', 'pieceId': 'WQN', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '13': { 'color': 'black', 'pieceId': 'WQB', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '14': { 'color': 'white', 'pieceId': 'WQ', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '15': { 'color': 'black', 'pieceId': 'WK', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '16': { 'color': 'white', 'pieceId': 'WKB', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '17': { 'color': 'black', 'pieceId': 'WKN', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} },
                '18': { 'color': 'white', 'pieceId': 'WKR', frontVector: {}, rearVector: {}, leftVector: {}, rightVector: {}, frontLeftVector: {}, frontRightVector: {}, rearLeftVector: {}, rearRightVector: {}, knightVector: {}, whiteKingMoves: {}, blackKingMoves: {}, queenMoves: {}, rookMoves: {}, knightMoves: {}, bishopMoves: {}, pawnMoves: {},possibleMoves: {}, attacking: {}, attackedBy: {}, attackingButBlocked: {}, attackedByButBlocked: {} }
            },
            pieces: {
                'WQR': { 'type': 'R', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WQN': { 'type': 'N', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WQB': { 'type': 'B', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WQ': { 'type': 'Q', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WK': { 'type': 'K', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WKB': { 'type': 'B', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WKN': { 'type': 'N', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WKR': { 'type': 'R', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP1': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP2': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP3': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP4': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP5': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP6': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP7': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'WP8': { 'type': 'P', 'color': 'white', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },

                'BQR': { 'type': 'R', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BQN': { 'type': 'N', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BQB': { 'type': 'B', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BQ': { 'type': 'Q', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BK': { 'type': 'K', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BKB': { 'type': 'B', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BKN': { 'type': 'N', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BKR': { 'type': 'R', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP1': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP2': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP3': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP4': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP5': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP6': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP7': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false },
                'BP8': { 'type': 'P', 'color': 'black', 'hasMoved': false, 'captured': false, 'enPassantEligible': false }
            }
        };

        var rank = 0, file = 0, outerSquareId = '', squareId = '';

        for (var rankOuter = 1; rankOuter <= 8; rankOuter++) {
            for (var fileOuter = 1; fileOuter <= 8; fileOuter++) {

                outerSquareId = rankOuter.toString() + fileOuter.toString();

                for (rank = rankOuter + 1; rank <= 8; rank++) {

                    squareId = rank.toString() + fileOuter.toString();

                    squaresAndPieces.squares[outerSquareId].frontVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].rookMoves[squareId] = '';
                }

                for (rank = rankOuter - 1; rank >= 1; rank--) {

                    squareId = rank.toString() + fileOuter.toString();

                    squaresAndPieces.squares[outerSquareId].rearVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].rookMoves[squareId] = '';
                }

                for (file = fileOuter - 1; file >= 1; file--) {

                    squareId = rankOuter.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].leftVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].rookMoves[squareId] = '';
                }

                for (file = fileOuter + 1; file <= 8; file++) {

                    squareId = rankOuter.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].rightVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].rookMoves[squareId] = '';
                }

                rank = rankOuter + 1, file = fileOuter - 1;
                while (rank <= 8 && file >= 1) {
                    
                    squareId = rank.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].frontLeftVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].bishopMoves[squareId] = '';

                    rank++, file--;
                }

                rank = rankOuter + 1, file = fileOuter + 1;
                while (rank <= 8 && file <= 8) {

                    squareId = rank.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].frontRightVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].bishopMoves[squareId] = '';

                    rank++, file++;
                }

                rank = rankOuter - 1, file = fileOuter - 1;
                while (rank >= 1 && file >= 1) {

                    squareId = rank.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].rearLeftVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].bishopMoves[squareId] = '';

                    rank--, file--;
                }

                rank = rankOuter - 1, file = fileOuter + 1;
                while (rank >= 1 && file <= 8) {

                    squareId = rank.toString() + file.toString();

                    squaresAndPieces.squares[outerSquareId].rearRightVector[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].queenMoves[squareId] = '';
                    squaresAndPieces.squares[outerSquareId].bishopMoves[squareId] = '';

                    rank--, file++;
                }


                if (rankOuter + 1 <= 8) {

                    if (fileOuter - 2 >= 1) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter + 1).toString() + (fileOuter - 2).toString()] = '';
                    if (fileOuter + 2 <= 8) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter + 1).toString() + (fileOuter + 2).toString()] = '';

                    if (rankOuter + 2 <= 8) {

                        if (fileOuter - 1 >= 1) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter + 2).toString() + (fileOuter - 1).toString()] = '';
                        if (fileOuter + 1 <= 8) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter + 2).toString() + (fileOuter + 1).toString()] = '';
                    }
                }

                if (rankOuter - 1 >= 1) {

                    if (fileOuter - 2 >= 1) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter - 1).toString() + (fileOuter - 2).toString()] = '';
                    if (fileOuter + 2 <= 8) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter - 1).toString() + (fileOuter + 2).toString()] = '';

                    if (rankOuter - 2 >= 1) {

                        if (fileOuter - 1 >= 1) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter - 2).toString() + (fileOuter - 1).toString()] = '';
                        if (fileOuter + 1 <= 8) squaresAndPieces.squares[outerSquareId].knightMoves[(rankOuter - 2).toString() + (fileOuter + 1).toString()] = '';
                    }
                }

                if (rankOuter < 8 && fileOuter > 1) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter + 1).toString() + (fileOuter - 1).toString()] = '';
                if (rankOuter < 8) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter + 1).toString() + fileOuter.toString()] = '';
                if (rankOuter < 8 && fileOuter < 8) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter + 1).toString() + (fileOuter + 1).toString()] = '';

                if (fileOuter > 1) squaresAndPieces.squares[outerSquareId].whiteKingMoves[rankOuter.toString() + (fileOuter - 1).toString()] = '';
                if (fileOuter < 8) squaresAndPieces.squares[outerSquareId].whiteKingMoves[rankOuter.toString() + (fileOuter + 1).toString()] = '';

                if (rankOuter > 1 && fileOuter > 1) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter - 1).toString() + (fileOuter - 1).toString()] = '';
                if (rankOuter > 1) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter - 1).toString() + fileOuter.toString()] = '';
                if (rankOuter > 1 && fileOuter < 8) squaresAndPieces.squares[outerSquareId].whiteKingMoves[(rankOuter - 1).toString() + (fileOuter + 1).toString()] = '';

                if (rankOuter < 8 && fileOuter > 1) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter + 1).toString() + (fileOuter - 1).toString()] = '';
                if (rankOuter < 8) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter + 1).toString() + fileOuter.toString()] = '';
                if (rankOuter < 8 && fileOuter < 8) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter + 1).toString() + (fileOuter + 1).toString()] = '';

                if (fileOuter > 1) squaresAndPieces.squares[outerSquareId].blackKingMoves[rankOuter.toString() + (fileOuter - 1).toString()] = '';
                if (fileOuter < 8) squaresAndPieces.squares[outerSquareId].blackKingMoves[rankOuter.toString() + (fileOuter + 1).toString()] = '';

                if (rankOuter > 1 && fileOuter > 1) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter - 1).toString() + (fileOuter - 1).toString()] = '';
                if (rankOuter > 1) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter - 1).toString() + fileOuter.toString()] = '';
                if (rankOuter > 1 && fileOuter < 8) squaresAndPieces.squares[outerSquareId].blackKingMoves[(rankOuter - 1).toString() + (fileOuter + 1).toString()] = '';

                // castleing
                if (rankOuter === 1 && fileOuter === 5) {
                    squaresAndPieces.squares[outerSquareId].whiteKingMoves['13'] = '';
                    squaresAndPieces.squares[outerSquareId].whiteKingMoves['17'] = '';
                }

                if (rankOuter === 1 && fileOuter === 4) {
                    squaresAndPieces.squares[outerSquareId].blackKingMoves['12'] = '';
                    squaresAndPieces.squares[outerSquareId].blackKingMoves['16'] = '';
                }

                if (rankOuter >= 2 && rankOuter <= 7) {

                    squaresAndPieces.squares[outerSquareId].pawnMoves[(rankOuter + 1).toString() + fileOuter.toString()] = '';
                    if (rankOuter === 2) squaresAndPieces.squares[outerSquareId].pawnMoves[(rankOuter + 2).toString() + fileOuter.toString()] = '';
                    if (fileOuter - 1 >= 1) squaresAndPieces.squares[outerSquareId].pawnMoves[(rankOuter + 1).toString() + (fileOuter - 1).toString()] = '';
                    if (fileOuter + 1 <= 8) squaresAndPieces.squares[outerSquareId].pawnMoves[(rankOuter + 1).toString() + (fileOuter + 1).toString()] = '';
                }
            }
        }
        /*
                whiteKingMoves: {},
                blackKingMoves: {},
        */
        return squaresAndPieces;
    }
}
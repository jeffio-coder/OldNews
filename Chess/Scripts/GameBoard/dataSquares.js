﻿function Squares () {

    var squaresAndPieces =
    {
        squares: {
            'squareId':
            {
                'color': '',
                'pieceId': '',
                frontVector: {},
                rearVector: {},
                leftVector: {},
                rightVector: {},
                frontLeftVector: {},
                frontRightVector: {},
                rearLeftVector: {},
                rearRightVector: {},
                knightVector: {},

                whiteKingMoves: {},       // whack/special case
                blackKingMoves: {},       // whack/special case
                queenMoves: {},       // whack
                rookMoves: {},       // whack
                knightMoves: {},       // whack
                bishopMoves: {},       // whack
                pawnMoves: {},       // whack/special case

                possibleMoves: {},
                attacking: {},
                attackedBy: {},
                attackingButBlocked: {},
                attackedByButBlocked: {}
            }
        },
        pieces: {
            'pieceId':
            {
                'type': '',
                'color': '',
                'hasMoved': false,
                'captured': false,
                'enPassantEligible': false
            }
        }
    };


    var specialMoves = {
        none: '',
        enPassant: 'enPassant',
        castleKing: 'castleKing',
        castleQueen: 'castleQueen'
    };

    var vectorTypes = {
        rankFile: 'rankFile',
        diagonal: 'diagonal'
    };

    var statuses = {
        open: 'open',
        occupiedByPlayer: 'occupiedByPlayer',
        occupiedByOpponent: 'occupiedByOpponent'
    };

    var getModel = function() {
        return squaresAndPieces;
    };

    var setModel = function(value) {
        squaresAndPieces = value;
    };

    var squareExists = function (squareId) {
        return squaresAndPieces.squares[squareId];
    };
    
    var getColor = function (squareId) {
        return squaresAndPieces.squares[squareId].color;
    };

    var getPieceId = function(squareId) {
        return squaresAndPieces.squares[squareId].pieceId;
    };

    var setPieceId = function (squareId, value) {
        squaresAndPieces.squares[squareId].pieceId = value;
    };

    var getPieceType = function (squareId) {
        if (squaresAndPieces.squares[squareId].pieceId === '') return '';
        return squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].type;
    };

    var setPieceType = function (squareId, value) {
        if (squaresAndPieces.squares[squareId].pieceId !== '' &&
            (value === '' ||
            value === common.pieces.king ||
            value === common.pieces.queen ||
            value === common.pieces.rook ||
            value === common.pieces.knight ||
            value === common.pieces.bishop ||
            value === common.pieces.pawn)
            )
            squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].type = value;
    };

    var getPieceColor = function (squareId) {
        if (squaresAndPieces.squares[squareId].pieceId === '') return '';
        return squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].color;
    };

    var getPieceHasMoved = function (squareId) {
        if (squaresAndPieces.squares[squareId].pieceId === '') return false;
        return squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].hasMoved;
    };

    var setPieceHasMoved = function (squareId, value) {
        if (squaresAndPieces.squares[squareId].pieceId !== '')
            squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].hasMoved = value;
    };

    var getPieceCaptured = function (squareId) {
        if (squaresAndPieces.squares[squareId].pieceId === '') return '';
        return squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].captured;
    };

    var setPieceCaptured = function (squareId, value) {
        if (squaresAndPieces.squares[squareId].pieceId !== '')
            squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].captured = value;
    };

    var getPieceEnPassantEligible = function (squareId) {
        if (squaresAndPieces.squares[squareId].pieceId === '') return '';
        return squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].enPassantEligible;
    };

    var setPieceEnPassantEligible = function (squareId, value) {
        if (squaresAndPieces.squares[squareId].pieceId !== '')
            squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].enPassantEligible = value;
    };
    
    var squareStatus = function (squareId) {
        return squaresAndPieces.squares[squareId].pieceId === '' ? statuses.open :
            squaresAndPieces.pieces[squaresAndPieces.squares[squareId].pieceId].color === requests.currentPlayer ?
            statuses.occupiedByPlayer : statuses.occupiedByOpponent;
    };

    var setEnPassantIneligibleForPlayer = function () {

        var key = '';
        for (var loopIndex = 0; loopIndex < Object.keys(squaresAndPieces.pieces).length; loopIndex++) {

            key = Object.keys(squaresAndPieces.pieces)[loopIndex];

            if (squaresAndPieces.pieces[key].color === requests.currentPlayer && squaresAndPieces.pieces[key].type === common.pieces.pawn)
                squaresAndPieces.pieces[key].enPassantEligible = false;
        }
    };

    var getCapturedPieces = function () {

        var key = '';
        var returnPieces = {};

        for (var loopIndex = 0; loopIndex < Object.keys(squaresAndPieces.pieces).length; loopIndex++) {

            key = Object.keys(squaresAndPieces.pieces)[loopIndex];

            if (squaresAndPieces.pieces[key].captured)
                returnPieces[key] = JSON.parse(JSON.stringify(squaresAndPieces.pieces[key]));
        }

        return returnPieces;
    };

    var changeSquareModelToOtherPlayer = function () {

        var newSquares = {};

        for (var rankIndex = 1; rankIndex <= 8; rankIndex++) {

            for (var fileIndex = 1; fileIndex <= 8; fileIndex++) {

                newSquares[(9 - rankIndex).toString() + (9 - fileIndex).toString()] =
                {
                    color: squaresAndPieces.squares[rankIndex.toString() + fileIndex.toString()].color,
                    pieceId: squaresAndPieces.squares[rankIndex.toString() + fileIndex.toString()].pieceId
                };
            }
        }

        squaresAndPieces.squares = newSquares;
    };

    //Todo: whack?
    var getKingRankFile = function (color) {

        var pieceId = color === common.colors.white ? common.pieceIds.whiteKing : common.pieceIds.blackKing;

        for (var loopIndex = 0; loopIndex < Object.keys(squaresAndPieces.squares).length; loopIndex++) {

            if (squaresAndPieces.squares[Object.keys(squaresAndPieces.squares)[loopIndex]].pieceId === pieceId) {

                return Object.keys(squaresAndPieces.squares)[loopIndex];
            }
        }
        return '';
    };

    var traverseStraightVectors = function (squareId, vectorType, keys) {

        var otherPiece = vectorType === vectorTypes.rankFile ? common.pieces.rook : common.pieces.bishop;
        var squareIdContainsAttackingPiece = getPieceColor(squareId) === requests.currentPlayer && 
            (getPieceType(squareId) === common.pieces.queen || getPieceType(squareId) === otherPiece);

        var blocked = false;
        
        for (var loopIndex = 0; loopIndex < keys.length; loopIndex++) {

            if (blocked) {

                squaresAndPieces.squares[squareId].attackingButBlocked[keys[loopIndex]] = specialMoves.none;
            } else {
                squaresAndPieces.squares[squareId].attacking[keys[loopIndex]] = specialMoves.none;

                if (squareIdContainsAttackingPiece && squareStatus(getPieceType(keys[loopIndex])) !== statuses.occupiedByPlayer) {

                    squaresAndPieces.squares[squareId].possibleMoves[keys[loopIndex]] = specialMoves.none;
                }
            }


            if (getPieceColor(keys[loopIndex]) === requests.currentOpponent &&
                (getPieceType(keys[loopIndex]) === common.pieces.queen || getPieceType(keys[loopIndex]) === otherPiece)) {
                
                if (blocked) {

                    squaresAndPieces.squares[squareId].attackedByButBlocked[keys[loopIndex]] = specialMoves.none;
                } else {
                    squaresAndPieces.squares[squareId].attackedBy[keys[loopIndex]] = specialMoves.none;
                }
            }


            if (squareStatus(getPieceType(keys[loopIndex])) !== statuses.open) {

                blocked = true;
            }
        }
    };

    var setVectorProperties = function() {

        var squareId = '';

        for (var rank = 1; rank <= 8; rank++) {
            for (var file = 1; file <= 8; file++) {

                squareId = rank.toString() + file.toString();

                traverseStraightVectors(squareId, vectorTypes.rankFile, Object.keys(squaresAndPieces.squares[squareId].frontVector));
                traverseStraightVectors(squareId, vectorTypes.rankFile, Object.keys(squaresAndPieces.squares[squareId].rearVector));
                traverseStraightVectors(squareId, vectorTypes.rankFile, Object.keys(squaresAndPieces.squares[squareId].leftVector));
                traverseStraightVectors(squareId, vectorTypes.rankFile, Object.keys(squaresAndPieces.squares[squareId].rightVector));
                traverseStraightVectors(squareId, vectorTypes.diagonal, Object.keys(squaresAndPieces.squares[squareId].frontLeftVector));
                traverseStraightVectors(squareId, vectorTypes.diagonal, Object.keys(squaresAndPieces.squares[squareId].frontRightVector));
                traverseStraightVectors(squareId, vectorTypes.diagonal, Object.keys(squaresAndPieces.squares[squareId].rearLeftVector));
                traverseStraightVectors(squareId, vectorTypes.diagonal, Object.keys(squaresAndPieces.squares[squareId].rearRightVector));

                //knight
                //attacked/attacking by pawn
                //attacked/attacking by king
            }
        }
    };



    return {
        statuses.open: statuses.open,
        statuses.occupiedByPlayer: statuses.occupiedByPlayer,
        statuses.occupiedByOpponent: statuses.occupiedByOpponent,

        model: function (value) { return arguments.length === 0 ? getModel() : setModel(value); },

        squareExists: function (squareId) { return squareExists(squareId); },

        color: function (squareId) { return getColor(squareId); },

        pieceId: function (squareId, value) { return arguments.length === 1 ? getPieceId(squareId) : setPieceId(squareId, value); },

        pieceType: function (squareId, value) { return arguments.length === 1 ? getPieceType(squareId) : setPieceType(squareId, value); },

        pieceColor: function (squareId) { return getPieceColor(squareId); },

        pieceHasMoved: function (squareId, value) { return arguments.length === 1 ? getPieceHasMoved(squareId) : setPieceHasMoved(squareId, value); },

        pieceCaptured: function (squareId, value) { return arguments.length === 1 ? getPieceCaptured(squareId) : setPieceCaptured(squareId, value); },

        pieceEnPassantEligible: function (squareId, value) { return arguments.length === 1 ? getPieceEnPassantEligible(squareId) : setPieceEnPassantEligible(squareId, value); },

        squareStatus: function (squareId) { return squareStatus(squareId); },

        squarePieceIsOppenentQueenOrRook: function (squareId) { return squarePieceIsOppenentQueenOrRook(squareId); },

        squarePieceIsOppenentQueenOrBishop: function (squareId) { return squarePieceIsOppenentQueenOrBishop(squareId); },

        setEnPassantIneligibleForPlayer: function () { return setEnPassantIneligibleForPlayer(); },

        getCapturedPieces: function () { return getCapturedPieces(); },

        changeSquareModelToOtherPlayer: function () { return changeSquareModelToOtherPlayer(); },

        getKingRankFile: function (color) { return getKingRankFile(color); }
    };
}

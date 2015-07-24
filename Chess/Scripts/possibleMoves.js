﻿var possibleMoves = {
    moves: {},
    squareId: '',
    forward: 1,
    backward: -1,
    left: -1,
    right: 1,
    verticalForwardMoves: {},
    verticalBackwardMoves: {},
    horitonalLeftMoves: {},
    horitonalRightMoves: {},
    diagonalForwardLeftMoves: {},
    diagonalForwardRightMoves: {},
    diagonalBackwardLeftMoves: {},
    diagonalBackwardRightMoves: {},
    kingMoves: {},
    knightMoves: {},
    pawnMoves: {},

    getMoves: function () {
        return JSON.parse(JSON.stringify(this.moves));
    },

    getKeys: function () {

        return Object.keys(this.moves);
    },

    getValue: function (movesKey) {

        if (typeof movesKey === 'number')
            return Object.keys(this.moves)[movesKey];
        else
            return this.moves[movesKey];
    },

    setValue: function (movesKey, value) {

        this.moves[movesKey] = value;
    },

    setMoves: function (value) {
        this.moves = JSON.parse(JSON.stringify(value));
    },

    deleteElement: function (movesKey) {
        
        delete this.moves[movesKey];
    },

    inMoves: function (movesKey) {

        return movesKey in this.moves;
    },

    loadSquareMoves: function () {

        var squareMoves = [];
        var rank = 0;
        var file = 0;

        for (var rankIndex = 1; rankIndex <= 8; rankIndex++) {
            for (var fileIndex = 1; fileIndex <= 8; fileIndex++) {
                
                squareMoves = [];
                rank = rankIndex + 1;
                while (rank <= 8) squareMoves.push((rank++).toString() + fileIndex.toString());
                this.verticalForwardMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                rank = rankIndex - 1;
                while (rank >= 1) squareMoves.push((rank--).toString() + fileIndex.toString());
                this.verticalBackwardMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                file = fileIndex + 1;
                while (file <= 8) squareMoves.push(rankIndex.toString() + (file++).toString());
                this.horitonalRightMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                file = fileIndex - 1;
                while (file >= 1) squareMoves.push(rankIndex.toString() + (file--).toString());
                this.horitonalLeftMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                rank = rankIndex + 1;
                file = fileIndex + 1;
                while (rank <= 8 && file <= 8) squareMoves.push((rank++).toString() + (file++).toString());
                this.diagonalForwardRightMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                rank = rankIndex + 1;
                file = fileIndex - 1;
                while (rank <= 8 && file >= 1) squareMoves.push((rank++).toString() + (file--).toString());
                this.diagonalForwardLeftMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                rank = rankIndex - 1;
                file = fileIndex + 1;
                while (rank >= 1 && file <= 8) squareMoves.push((rank--).toString() + (file++).toString());
                this.diagonalBackwardRightMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                squareMoves = [];
                rank = rankIndex - 1;
                file = fileIndex - 1;
                while (rank >= 1 && file >= 1) squareMoves.push((rank--).toString() + (file--).toString());
                this.diagonalBackwardLeftMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;

                // Load pawn moves
                squareMoves = [];
                if (rankIndex > 1 && rankIndex < 8) {
                    
                    squareMoves.push({ squareId: (rankIndex + 1).toString() + fileIndex.toString(), capture: false });
                    if (rankIndex === 2) squareMoves.push({ squareId: (rankIndex + 2).toString() + fileIndex.toString(), capture: false });
                    if (fileIndex - 1 >= 1) squareMoves.push({ squareId: (rankIndex + 1).toString() + (fileIndex - 1).toString(), capture: true });
                    if (fileIndex + 1 <= 8) squareMoves.push({ squareId: (rankIndex + 1).toString() + (fileIndex + 1).toString(), capture: true });
                }
                this.pawnMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;
            }
        }

        this.loadKingMoves();
        this.loadKnightMoves();
    },

    loadKingMoves: function () {

        var squareMoves = [];

        for (var rankIndex = 1; rankIndex <= 8; rankIndex++) {
            for (var fileIndex = 1; fileIndex <= 8; fileIndex++) {

                squareMoves = [];

                if (rankIndex < 8 && fileIndex > 1) squareMoves.push((rankIndex + 1).toString() + (fileIndex - 1).toString());
                if (rankIndex < 8) squareMoves.push((rankIndex + 1).toString() + fileIndex.toString());
                if (rankIndex < 8 && fileIndex < 8) squareMoves.push((rankIndex + 1).toString() + (fileIndex + 1).toString());

                if (fileIndex > 1) squareMoves.push(rankIndex.toString() + (fileIndex - 1).toString());
                if (fileIndex < 8) squareMoves.push(rankIndex.toString() + (fileIndex + 1).toString());

                if (rankIndex > 1 && fileIndex > 1) squareMoves.push((rankIndex - 1).toString() + (fileIndex - 1).toString());
                if (rankIndex > 1) squareMoves.push((rankIndex - 1).toString() + fileIndex.toString());
                if (rankIndex > 1 && fileIndex < 8) squareMoves.push((rankIndex - 1).toString() + (fileIndex + 1).toString());

                this.kingMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;
            }
        }
    },

    loadKnightMoves: function() {
        
        var squareMoves = [];

        for (var rankIndex = 1; rankIndex <= 8; rankIndex++) {
            for (var fileIndex = 1; fileIndex <= 8; fileIndex++) {

                squareMoves = [];

                if (rankIndex + 1 <= 8) {

                    if (fileIndex - 2 >= 1) squareMoves.push((rankIndex + 1).toString() + (fileIndex - 2).toString());
                    if (fileIndex + 2 <= 8) squareMoves.push((rankIndex + 1).toString() + (fileIndex + 2).toString());

                    if (rankIndex + 2 <= 8) {

                        if (fileIndex - 1 >= 1) squareMoves.push((rankIndex + 2).toString() + (fileIndex - 1).toString());
                        if (fileIndex + 1 <= 8) squareMoves.push((rankIndex + 2).toString() + (fileIndex + 1).toString());
                    }
                }

                if (rankIndex - 1 >= 1) {

                    if (fileIndex - 2 >= 1) squareMoves.push((rankIndex - 1).toString() + (fileIndex - 2).toString());
                    if (fileIndex + 2 <= 8) squareMoves.push((rankIndex - 1).toString() + (fileIndex + 2).toString());

                    if (rankIndex - 2 >= 1) {

                        if (fileIndex - 1 >= 1) squareMoves.push((rankIndex - 2).toString() + (fileIndex - 1).toString());
                        if (fileIndex + 1 <= 8) squareMoves.push((rankIndex - 2).toString() + (fileIndex + 1).toString());
                    }
                }

                this.knightMoves[rankIndex.toString() + fileIndex.toString()] = squareMoves;
            }
        }
    },

    loadPossibleMoves: function() {

        this.setMoves({});

        switch (squareModel.getPieceType(this.squareId)) {

            case globals.king:
                this.possibleMovesForKing();
                break;
            case globals.queen:
                this.possibleMovesForQueen();
                break;
            case globals.rook:
                globals.possibleMovesForRook();
                break;
            case globals.knight:
                this.possibleMovesForKnight();
                break;
            case globals.bishop:
                this.possibleMovesForBishop();
                break;
            case globals.pawn:
                this.possibleMovesForPawn();
                break;
        }
    },

    possibleMovesForKing: function () {

        var targetId = '';

        for (var loopIndex = 0; loopIndex < this.kingMoves[this.squareId].length; loopIndex++) {

            targetId = this.kingMoves[this.squareId][loopIndex];

            if (squareModel.squareStatus(targetId) !== squareModel.statusPlayerOccupied)  
                this.setValue(targetId, globals.specialMoves.none);
        }

        if (common.inCheck)  // A player may not castle of of check.
            return;

        // Special code for castling.
        if (this.squareId === '15' && restCalls.currentPlayer === globals.colors.white && !squareModel.getPieceHasMoved('15')) {

            if (!squareModel.getPieceHasMoved('18') &&
                squareModel.squareStatus('16') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('16') &&
                squareModel.squareStatus('17') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('17')) {

                this.setValue('17', globals.specialMoves.castleKing);
            }

            if (!squareModel.getPieceHasMoved('11') &&
                squareModel.squareStatus('12') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('12') &&
                squareModel.squareStatus('13') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('13') &&
                squareModel.squareStatus('14') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('14')) {

                this.setValue('13', globals.specialMoves.castleQueen);
            }
        }

        if (this.squareId === '14' && restCalls.currentPlayer === globals.colors.black && !squareModel.getPieceHasMoved('14')) {

            if (!squareModel.getPieceHasMoved('11') &&
                squareModel.squareStatus('12') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('12') &&
                squareModel.squareStatus('13') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('13')) {

                this.setValue('12', globals.specialMoves.castleKing);
            }

            if (!squareModel.getPieceHasMoved('18') &&
                squareModel.squareStatus('15') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('15') &&
                squareModel.squareStatus('16') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('16') &&
                squareModel.squareStatus('17') === squareModel.statusOpen &&
                !this.checkForPlayerInCheck('17')) {

                this.setValue('16', globals.specialMoves.castleQueen);
            }
        }

    },

    possibleMovesForQueen: function () {

        this.possibleVerticalAndHorizonalMoves();
        this.possibleDiagonalMoves();
    },

    possibleMovesForRook: function () {

        this.possibleVerticalAndHorizonalMoves();
    },

    possibleMovesForKnight: function () {

        for (var loopIndex = 0; loopIndex < this.knightMoves[this.squareId].length; loopIndex++) {

            var targetId = this.knightMoves[this.squareId][loopIndex];

            if (squareModel.squareStatus(targetId) !== squareModel.statusPlayerOccupied) 
                this.setValue(targetId, globals.specialMoves.none);
        }
    },

    possibleMovesForBishop: function () {

        this.possibleDiagonalMoves();
    },

    possibleMovesForPawn: function () {

        // For the forward moves, the pawnMoves will be traversed one then two (if applicable). If one is blocked,
        // set a flag so two will be considered blocked.

        var targetId = '';
        var blocked = false;

        for (var loopIndex = 0; loopIndex < this.pawnMoves[this.squareId].length; loopIndex++) {

            targetId = this.pawnMoves[this.squareId][loopIndex].squareId;

            if (!this.pawnMoves[this.squareId][loopIndex].capture) {  // Move forward.

                if (squareModel.squareStatus(targetId) === squareModel.statusOpen) {
                    if (!blocked) this.setValue(targetId, globals.specialMoves.none);
                } else {
                    blocked = true;
                }
            } else {
                if (squareModel.squareStatus(targetId) === squareModel.statusOpponentOccupied) {
                    this.setValue(targetId, globals.specialMoves.none);
                } else {
                    if (squareModel.squareBehindEnPassantEligible(targetId))
                        this.setValue(targetId, globals.specialMoves.enPassant);
                }
            }
        }
    },

    possibleVerticalAndHorizonalMoves: function() {

        var targetId = '';

        var moveArrays = [
            this.verticalForwardMoves[this.squareId],
            this.verticalBackwardMoves[this.squareId],
            this.horitonalLeftMoves[this.squareId],
            this.horitonalRightMoves[this.squareId]
        ];

        for (var outerLoopIndex = 0; outerLoopIndex < moveArrays.length; outerLoopIndex++) {

            for (var innerLoopIndex = 0; innerLoopIndex < moveArrays[outerLoopIndex].length; innerLoopIndex++) {

                targetId = moveArrays[outerLoopIndex][innerLoopIndex];

                if (squareModel.squareStatus(targetId) === squareModel.statusPlayerOccupied)
                    break;

                if (squareModel.squareStatus(targetId) === squareModel.statusOpponentOccupied) {
                    this.setValue(targetId, globals.specialMoves.none);
                    break;
                }

                this.setValue(targetId, globals.specialMoves.none);
            }
        }
    },

    possibleDiagonalMoves: function () {

        var targetId = '';

        var moveArrays = [
            this.diagonalForwardLeftMoves[this.squareId],
            this.diagonalForwardRightMoves[this.squareId],
            this.diagonalBackwardLeftMoves[this.squareId],
            this.diagonalBackwardRightMoves[this.squareId]
        ];

        for (var outerLoopIndex = 0; outerLoopIndex < moveArrays.length; outerLoopIndex++) {

            for (var innerLoopIndex = 0; innerLoopIndex < moveArrays[outerLoopIndex].length; innerLoopIndex++) {

                targetId = moveArrays[outerLoopIndex][innerLoopIndex];

                if (squareModel.squareStatus(targetId) === squareModel.statusPlayerOccupied)
                    break;

                if (squareModel.squareStatus(targetId) === squareModel.statusOpponentOccupied) {
                    this.setValue(targetId, globals.specialMoves.none);
                    break;
                }

                this.setValue(targetId, globals.specialMoves.none);
            }
        }
    },

    checkForPlayerInCheck: function (kingSquareId) {

        if (!kingSquareId)
            kingSquareId = this.getKingRankFile();   

        if (this.checkForPawnCheck(kingSquareId))
            return true;

        if (this.checkForKnightCheck(kingSquareId))
            return true;

        if (this.checkForVerticalHorizontalDiagonalCheck(kingSquareId))
            return true;

        return false;
    },

    checkForPawnCheck: function (kingSquareId) {

        if (common.getRank(kingSquareId) === 8)
            return false;

        var targetSquareId = '';

        if (common.getFile(kingSquareId) > 1) {

            targetSquareId = (common.getRank(kingSquareId) + 1).toString() + (common.getFile(kingSquareId) - 1).toString();

            if (squareModel.getPieceType(targetSquareId) === globals.pawn && squareModel.getPieceColor(targetSquareId) === restCalls.currentOpponent)
                return true;
        }

        if (common.getFile(kingSquareId) < 8) {

            targetSquareId = (common.getRank(kingSquareId) + 1).toString() + (common.getFile(kingSquareId) + 1).toString();

            if (squareModel.getPieceType(targetSquareId) === globals.pawn && squareModel.getPieceColor(targetSquareId) === restCalls.currentOpponent)
                return true;
        }

        return false;
    },

    checkForKnightCheck: function (kingSquareId) {

        for (var loopIndex = 0; loopIndex < this.knightMoves[kingSquareId].length; loopIndex++) {

            if (squareModel.squareStatus(this.knightMoves[kingSquareId][loopIndex]) === squareModel.statusOpponentOccupied &&
                squareModel.getPieceType(this.knightMoves[kingSquareId][loopIndex]) === globals.knight)
                return true;
        }

        return false;
    },

    checkForVerticalHorizontalDiagonalCheck: function (kingSquareId) {

        var outerLoopIndex = 0;
        var innerLoopIndex = 0;

        var moveArrays = [
            this.verticalForwardMoves[kingSquareId],
            this.verticalBackwardMoves[kingSquareId],
            this.horitonalLeftMoves[kingSquareId],
            this.horitonalRightMoves[kingSquareId]
        ];

        for (outerLoopIndex = 0; outerLoopIndex < moveArrays.length; outerLoopIndex++) {

            for (innerLoopIndex = 0; innerLoopIndex < moveArrays[outerLoopIndex].length; innerLoopIndex++) {

                if (squareModel.squareStatus(moveArrays[outerLoopIndex][innerLoopIndex]) === squareModel.statusOpponentOccupied) {
                    
                    if (squareModel.squarePieceIsOppenentQueenOrRook(moveArrays[outerLoopIndex][innerLoopIndex]))
                        return true;
                    else
                        break;
                }

                if (squareModel.squareStatus(moveArrays[outerLoopIndex][innerLoopIndex]) === squareModel.statusPlayerOccupied)
                    break;
            }
        }


        moveArrays = [
            this.diagonalForwardLeftMoves[kingSquareId],
            this.diagonalForwardRightMoves[kingSquareId],
            this.diagonalBackwardLeftMoves[kingSquareId],
            this.diagonalBackwardRightMoves[kingSquareId]
        ];

        for (outerLoopIndex = 0; outerLoopIndex < moveArrays.length; outerLoopIndex++) {

            for (innerLoopIndex = 0; innerLoopIndex < moveArrays[outerLoopIndex].length; innerLoopIndex++) {

                if (squareModel.squareStatus(moveArrays[outerLoopIndex][innerLoopIndex]) === squareModel.statusOpponentOccupied) {

                    if (squareModel.squarePieceIsOppenentQueenOrBishop(moveArrays[outerLoopIndex][innerLoopIndex]))
                        return true;
                    else
                        break;
                }

                if (squareModel.squareStatus(moveArrays[outerLoopIndex][innerLoopIndex]) === squareModel.statusPlayerOccupied)
                    break;
            }
        }

        return false;
    },

    getKingRankFile: function () {

        var pieceId = restCalls.currentPlayer.substring(0, 1).toUpperCase() + 'K';

        for (var loopIndex = 0; loopIndex <= Object.keys(squareModel.squares).length; loopIndex++) {
            
            if (squareModel.squares[Object.keys(squareModel.squares)[loopIndex]].pieceId === pieceId) {

                return Object.keys(squareModel.squares)[loopIndex];
            }
        }
        return '';
    }
}
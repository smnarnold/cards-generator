/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-line-break/dist/LineBreak.js":
/*!*******************************************************!*\
  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(/*! ./Trie */ "./node_modules/css-line-break/dist/Trie.js");

var _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ "./node_modules/css-line-break/dist/linebreak-trie.js");

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/Trie.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Trie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),

/***/ "./node_modules/css-line-break/dist/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-line-break/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(/*! ./LineBreak */ "./node_modules/css-line-break/dist/LineBreak.js");

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),

/***/ "./node_modules/css-line-break/dist/linebreak-trie.js":
/*!************************************************************!*\
  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Angle.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Angle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Bounds.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Bounds.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(/*! ./drawing/BezierCurve */ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js");

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error( true ? 'Unable to get document size' : undefined);
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Clone.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Clone.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

var _ResourceLoader = __webpack_require__(/*! ./ResourceLoader */ "./node_modules/html2canvas/dist/npm/ResourceLoader.js");

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(/*! ./PseudoNodeContent */ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (true) {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (true) {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (true) {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (true) {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject( true ? 'Body element not found in Document that is getting rendered' : undefined);
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject( true ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : undefined);
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Color.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Color.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Feature.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Feature.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Font.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Font.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);

        this._data = {};
        this._document = document;
    }

    _createClass(FontMetrics, [{
        key: '_parseMetrics',
        value: function _parseMetrics(font) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');

            var body = this._document.body;
            if (!body) {
                throw new Error( true ? 'No document found for font metrics' : undefined);
            }

            container.style.visibility = 'hidden';
            container.style.fontFamily = font.fontFamily;
            container.style.fontSize = font.fontSize;
            container.style.margin = '0';
            container.style.padding = '0';

            body.appendChild(container);

            img.src = _Util.SMALL_IMAGE;
            img.width = 1;
            img.height = 1;

            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';

            span.style.fontFamily = font.fontFamily;
            span.style.fontSize = font.fontSize;
            span.style.margin = '0';
            span.style.padding = '0';

            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;

            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';

            var middle = img.offsetTop - container.offsetTop + 2;

            body.removeChild(container);

            return { baseline: baseline, middle: middle };
        }
    }, {
        key: 'getMetrics',
        value: function getMetrics(font) {
            var key = font.fontFamily + ' ' + font.fontSize;
            if (this._data[key] === undefined) {
                this._data[key] = this._parseMetrics(font);
            }

            return this._data[key];
        }
    }]);

    return FontMetrics;
}();

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Gradient.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Gradient.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(/*! ./Angle */ "./node_modules/html2canvas/dist/npm/Angle.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Input.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _Circle = __webpack_require__(/*! ./drawing/Circle */ "./node_modules/html2canvas/dist/npm/drawing/Circle.js");

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Length.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if (true && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ListItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ListItem.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Logger.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Logger.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _borderRadius = __webpack_require__(/*! ./parsing/borderRadius */ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js");

var _display = __webpack_require__(/*! ./parsing/display */ "./node_modules/html2canvas/dist/npm/parsing/display.js");

var _float = __webpack_require__(/*! ./parsing/float */ "./node_modules/html2canvas/dist/npm/parsing/float.js");

var _font = __webpack_require__(/*! ./parsing/font */ "./node_modules/html2canvas/dist/npm/parsing/font.js");

var _letterSpacing = __webpack_require__(/*! ./parsing/letterSpacing */ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js");

var _lineBreak = __webpack_require__(/*! ./parsing/lineBreak */ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _margin = __webpack_require__(/*! ./parsing/margin */ "./node_modules/html2canvas/dist/npm/parsing/margin.js");

var _overflow = __webpack_require__(/*! ./parsing/overflow */ "./node_modules/html2canvas/dist/npm/parsing/overflow.js");

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

var _padding = __webpack_require__(/*! ./parsing/padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _textShadow = __webpack_require__(/*! ./parsing/textShadow */ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js");

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _transform = __webpack_require__(/*! ./parsing/transform */ "./node_modules/html2canvas/dist/npm/parsing/transform.js");

var _visibility = __webpack_require__(/*! ./parsing/visibility */ "./node_modules/html2canvas/dist/npm/parsing/visibility.js");

var _wordBreak = __webpack_require__(/*! ./parsing/word-break */ "./node_modules/html2canvas/dist/npm/parsing/word-break.js");

var _zIndex = __webpack_require__(/*! ./parsing/zIndex */ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js");

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (true) {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeParser.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeParser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(/*! ./StackingContext */ "./node_modules/html2canvas/dist/npm/StackingContext.js");

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (true) {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (true) {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if (true && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Proxy.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Proxy.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject( true ? 'No proxy defined' : undefined);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject( true ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : undefined);
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : undefined);
            };
        }

        xhr.send();
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/PseudoNodeContent.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Renderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Renderer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Gradient = __webpack_require__(/*! ./Gradient */ "./node_modules/html2canvas/dist/npm/Gradient.js");

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (true) {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ResourceLoader.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ResourceLoader.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (true) {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (true) {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (true) {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) loading image' : undefined);
            }, timeout);
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/StackingContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/StackingContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextBounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextBounds.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Unicode.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Unicode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(/*! css-line-break */ "./node_modules/css-line-break/dist/index.js");

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Util.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Window.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Window.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(/*! ./NodeParser */ "./node_modules/html2canvas/dist/npm/NodeParser.js");

var _Renderer = __webpack_require__(/*! ./Renderer */ "./node_modules/html2canvas/dist/npm/Renderer.js");

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Clone = __webpack_require__(/*! ./Clone */ "./node_modules/html2canvas/dist/npm/Clone.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (true) {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (true) {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (true) {
                    logger.log('Starting renderer');
                }

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (true) {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js":
/*!******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _Vector = __webpack_require__(/*! ./Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Circle.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Circle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Path.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Path.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Size.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Size.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Vector.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Vector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(/*! ./Window */ "./node_modules/html2canvas/dist/npm/Window.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + "$npm_package_version");

    if (true && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (true) {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/background.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/background.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(/*! ../drawing/Size */ "./node_modules/html2canvas/dist/npm/drawing/Size.js");

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(/*! ../drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(/*! ../Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _padding = __webpack_require__(/*! ./padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (true) {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/border.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/border.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/borderRadius.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/display.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/display.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/float.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/float.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/font.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/font.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/lineBreak.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/listStyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(/*! ./background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/margin.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/margin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflow.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/padding.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/padding.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/position.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/position.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textDecoration.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textShadow.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textTransform.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/transform.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/transform.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/visibility.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/visibility.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/word-break.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/word-break.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/zIndex.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ../drawing/Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _textDecoration = __webpack_require__(/*! ../parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CardsGen =
/*#__PURE__*/
function () {
  function CardsGen() {
    _classCallCheck(this, CardsGen);

    this.cols = 0;
    this.cards = [];
    this.placeholder = document.querySelector('#placeholder');
  }

  _createClass(CardsGen, [{
    key: "init",
    value: function init() {
      this.getData();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      document.forms.settings.type.addEventListener('change', function () {
        return _this.getData();
      });
      document.forms.settings.submit.addEventListener('click', function (e) {
        return _this.generate(e);
      });
      Array.prototype.forEach.call(document.forms.settings.render, function (radio) {
        return radio.addEventListener('change', function (e) {
          return _this.placeholder.className = document.forms.settings.render.value;
        });
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      document.forms.settings.basic.disabled = true;
      this.cards = [];
      var url = "https://spreadsheets.google.com/feeds/cells/".concat(document.forms.settings.type.value, "/1/public/values?alt=json-in-script&callback=?");
      $.getJSON(url, {}, function (data) {
        _this2.json = data.feed;
        _this2.type = _this2.json.title.$t;
        _this2.cols = parseInt(_this2.json.gs$colCount.$t);
        _this2.rows = parseInt(_this2.json.gs$rowCount.$t);

        _this2.formatData(_this2.json.entry);
      });
    }
  }, {
    key: "generate",
    value: function generate(e) {
      e.preventDefault();
      this.placeholder.innerHTML = '';
      var cardsArrToCreate = this.cardsSelection;

      for (var x = 0; x < cardsArrToCreate.length; x++) {
        var card = new _card__WEBPACK_IMPORTED_MODULE_0__["default"](cardsArrToCreate[x], {
          placeholder: this.placeholder,
          render: document.forms.settings.render.value,
          type: this.type
        });
        card.create();
      }
    }
  }, {
    key: "formatData",
    value: function formatData(json) {
      var card = {};
      var currentRow = null;

      for (var x = this.cols; x < json.length; x++) {
        var entry = json[x];
        var col = entry.gs$cell.col - 1;
        var row = entry.gs$cell.row - 1;

        if (row !== currentRow) {
          if (!this.isObjEmpty(card)) {
            card.index = currentRow;
            this.cards.push(card);
          }

          card = {};
          currentRow = row;
        }

        var type = json[col].content.$t;
        card[type] = entry.content.$t.trim();
      }

      if (!this.isObjEmpty(card)) this.cards.push(card);
      document.forms.settings.basic.disabled = false;
    }
  }, {
    key: "isObjEmpty",
    value: function isObjEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }

      return true;
    }
  }, {
    key: "cardsSelection",
    get: function get() {
      var start = 0;
      var end = this.cards.length;

      if (document.forms.settings.cards.value === 'specific') {
        var selectionArr = document.forms.settings.selection.value.split('-');
        start = parseInt(selectionArr[0]) - 1;
        end = selectionArr.length > 1 ? parseInt(selectionArr[1]) : parseInt(selectionArr[0]);
      }

      return this.cards.slice(start, end);
    }
  }]);

  return CardsGen;
}();

var cardsGen = new CardsGen();
cardsGen.init();

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Card =
/*#__PURE__*/
function () {
  function Card(card, settings) {
    _classCallCheck(this, Card);

    this.card = card;
    this.defaultSettings = {
      placeholder: document.body,
      render: 'export',
      type: 'modifier'
    };
    this.settings = Object.assign(this.defaultSettings, settings);
  }

  _createClass(Card, [{
    key: "create",
    value: function create() {
      console.log(this.settings);
      var card = document.createElement('div');
      card.className = "card card--".concat(this.settings.type);
      card.id = "card-".concat(this.card.index);
      var cell1 = this.getScore(this.card.pts1);
      var cell2 = this.getScore(this.card.pts2);
      var cell3 = this.getScore(this.card.pts3);
      var cell4 = this.getScore(this.card.pts4);
      var description = this.formatStr(this.card.name);
      var action = this.getAction(this.card);
      card.innerHTML = "\n        <section class=\"section scoreboard\">\n          <div class=\"scoreboard__wrapper\">\n            <div class=\"scoreboard__cell\">".concat(cell1, "</div>\n            <div class=\"scoreboard__cell\">").concat(cell2, "</div>\n            <div class=\"scoreboard__cell\">").concat(cell3, "</div>\n          </div>\n        </section>\n        <section class=\"section description\">").concat(description, "</section>\n        ").concat(action, "\n    ");
      this.print(card);
    }
  }, {
    key: "getScore",
    value: function getScore(value) {
      var html = '';
      var classname = 'hole';
      var type = !isNaN(value) ? 'number' : 'string';
      if (type === 'string' && typeof value === 'undefined') type = 'default';

      switch (type) {
        case 'number':
          // is a numeric value
          value = parseInt(value);

          switch (Math.sign(value)) {
            case -1:
              value = Math.abs(value); // Remove the '-' score will bve red instead

              classname = 'negative';
              break;

            case 1:
              classname = 'positive';
              break;

            default:
              classname = 'neutral';
          }

          break;

        case 'string':
          // Display icone instead of a value
          classname = value;
          value = '';
          break;

        default:
          // empty display a hole
          value = '';
      }

      html = "<div class=\"scoreboard__point ".concat(classname, "\">").concat(value, "</div>");
      return html;
    }
  }, {
    key: "getAction",
    value: function getAction(card) {
      var html = '';
      var title = typeof card.actionTitle === 'undefined' ? '' : "<strong>".concat(this.formatStr(card.actionTitle), "</strong>");
      var description = typeof card.actionDesc === 'undefined' ? '' : "<p>".concat(this.formatStr(card.actionDesc), "</p>");
      var classname = typeof card.actionType === 'undefined' ? '' : card.actionType;

      if (card.actionDesc) {
        html = "<section class=\"section action ".concat(classname, "\">").concat(title, " ").concat(description, "</section>");
      }

      return html;
    }
  }, {
    key: "formatStr",
    value: function formatStr(str) {
      if (typeof str !== 'undefined' && str.length) {
        str = this.fixExclamationMark(str);
        str = this.avoidOrphan(str);
        str = this.replaceQuotationMarks(str);
      }

      return str;
    }
  }, {
    key: "fixExclamationMark",
    value: function fixExclamationMark(str) {
      return this.replaceAll(str, ' !', '&thinsp;!');
    }
  }, {
    key: "avoidOrphan",
    value: function avoidOrphan(str) {
      var n = str.split(' ');

      if (n.length > 2) {
        var size = this.strLengthWithoutEntities(n[n.length - 1]) + this.strLengthWithoutEntities(n[n.length - 2]);

        if (size < 16) {
          // if words combinasion isn't too long
          str = str.replace(/ ([^ ]*)$/, '&nbsp;$1');
        }
      }

      return str;
    }
  }, {
    key: "replaceQuotationMarks",
    value: function replaceQuotationMarks(str) {
      var n = str.split('"');

      if (n.length > 1) {
        for (var x = 1; x < n.length; x++) {
          if (this.isOdd(x)) {
            n[x] = "<em>\xAB&nbsp;".concat(n[x], "&nbsp;\xBB</em>");
          }
        }

        str = n.join('');
      }

      return str;
    }
  }, {
    key: "isOdd",
    value: function isOdd(nbr) {
      return nbr % 2;
    }
  }, {
    key: "replaceAll",
    value: function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }
  }, {
    key: "strLengthWithoutEntities",
    value: function strLengthWithoutEntities(str) {
      var el = document.createElement('div');
      el.innerHTML = str;
      return el.innerHTML.length;
    }
  }, {
    key: "print",
    value: function print(card) {
      this.settings.placeholder.appendChild(card);

      if (this.settings.render === 'export') {
        html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(card).then(function (canvas) {
          var src = canvas.toDataURL('image/jpeg', 1.0);
          downloadjs__WEBPACK_IMPORTED_MODULE_1___default()(src, "".concat(card.id, ".jpg"), 'image/jpeg');
        });
      }
    }
  }]);

  return Card;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvTGluZUJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L1RyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9saW5lYnJlYWstdHJpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG93bmxvYWRqcy9kb3dubG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0JvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9GZWF0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Gb250LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9HcmFkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTm9kZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTm9kZVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1BzZXVkb05vZGVDb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUmVzb3VyY2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1N0YWNraW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVGV4dEJvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVGV4dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vV2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL0JlemllckN1cnZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vZHJhd2luZy9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9ib3JkZXJSYWRpdXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9mb250LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2xldHRlclNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGluZUJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2xpc3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9tYXJnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvb3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvb3ZlcmZsb3dXcmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3BhZGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdGV4dERlY29yYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdGV4dFNoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0VHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy92aXNpYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3dvcmQtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvekluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9yZW5kZXJlci9DYW52YXNSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcmVuZGVyZXIvRm9yZWlnbk9iamVjdFJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZHNHZW4iLCJjb2xzIiwiY2FyZHMiLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldERhdGEiLCJiaW5kRXZlbnRzIiwiZm9ybXMiLCJzZXR0aW5ncyIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibWl0IiwiZSIsImdlbmVyYXRlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsInJlbmRlciIsInJhZGlvIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJiYXNpYyIsImRpc2FibGVkIiwidXJsIiwiJCIsImdldEpTT04iLCJkYXRhIiwianNvbiIsImZlZWQiLCJ0aXRsZSIsIiR0IiwicGFyc2VJbnQiLCJncyRjb2xDb3VudCIsInJvd3MiLCJncyRyb3dDb3VudCIsImZvcm1hdERhdGEiLCJlbnRyeSIsInByZXZlbnREZWZhdWx0IiwiaW5uZXJIVE1MIiwiY2FyZHNBcnJUb0NyZWF0ZSIsImNhcmRzU2VsZWN0aW9uIiwieCIsImxlbmd0aCIsImNhcmQiLCJDYXJkIiwiY3JlYXRlIiwiY3VycmVudFJvdyIsImNvbCIsImdzJGNlbGwiLCJyb3ciLCJpc09iakVtcHR5IiwiaW5kZXgiLCJwdXNoIiwiY29udGVudCIsInRyaW0iLCJvYmoiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uQXJyIiwic2VsZWN0aW9uIiwic3BsaXQiLCJzbGljZSIsImNhcmRzR2VuIiwiaW5pdCIsImRlZmF1bHRTZXR0aW5ncyIsImJvZHkiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiY2VsbDEiLCJnZXRTY29yZSIsInB0czEiLCJjZWxsMiIsInB0czIiLCJjZWxsMyIsInB0czMiLCJjZWxsNCIsInB0czQiLCJkZXNjcmlwdGlvbiIsImZvcm1hdFN0ciIsIm5hbWUiLCJhY3Rpb24iLCJnZXRBY3Rpb24iLCJwcmludCIsImh0bWwiLCJjbGFzc25hbWUiLCJpc05hTiIsIk1hdGgiLCJzaWduIiwiYWJzIiwiYWN0aW9uVGl0bGUiLCJhY3Rpb25EZXNjIiwiYWN0aW9uVHlwZSIsInN0ciIsImZpeEV4Y2xhbWF0aW9uTWFyayIsImF2b2lkT3JwaGFuIiwicmVwbGFjZVF1b3RhdGlvbk1hcmtzIiwicmVwbGFjZUFsbCIsIm4iLCJzaXplIiwic3RyTGVuZ3RoV2l0aG91dEVudGl0aWVzIiwicmVwbGFjZSIsImlzT2RkIiwiam9pbiIsIm5iciIsImZpbmQiLCJSZWdFeHAiLCJlbCIsImFwcGVuZENoaWxkIiwiaHRtbDJjYW52YXMiLCJ0aGVuIiwiY2FudmFzIiwic3JjIiwidG9EYXRhVVJMIiwiZG93bmxvYWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0U7Ozs7Ozs7Ozs7OztBQ3RQYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2QkFBNkIsbUJBQU8sQ0FBQywrR0FBa0M7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM3R2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQywrRUFBYzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEVBQXVDO0FBQ3JDaUcsMERBQVcsQ0FBQ3ZFLElBQUQsQ0FBWCxDQUFrQndFLElBQWxCLENBQXVCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQyxjQUFJQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQixZQUFqQixFQUErQixHQUEvQixDQUFWO0FBQ0FDLDJEQUFRLENBQUNGLEdBQUQsWUFBUzFFLElBQUksQ0FBQzhCLEVBQWQsV0FBd0IsWUFBeEIsQ0FBUjtBQUNELFNBSEQ7QUFJRDtBQUNGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MaW5lQnJlYWtlciA9IGV4cG9ydHMuaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZXhwb3J0cy5saW5lQnJlYWtBdEluZGV4ID0gZXhwb3J0cy5jb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZXhwb3J0cy5Vbmljb2RlVHJpZSA9IGV4cG9ydHMuQlJFQUtfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTk9UX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX01BTkRBVE9SWSA9IGV4cG9ydHMuY2xhc3NlcyA9IGV4cG9ydHMuTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX1RyaWUgPSByZXF1aXJlKCcuL1RyaWUnKTtcblxudmFyIF9saW5lYnJlYWtUcmllID0gcmVxdWlyZSgnLi9saW5lYnJlYWstdHJpZScpO1xuXG52YXIgX2xpbmVicmVha1RyaWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWJyZWFrVHJpZSk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSBleHBvcnRzLkxFVFRFUl9OVU1CRVJfTU9ESUZJRVIgPSA1MDtcblxuLy8gTm9uLXRhaWxvcmFibGUgTGluZSBCcmVha2luZyBDbGFzc2VzXG52YXIgQksgPSAxOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBDUiA9IDI7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKSwgZXhjZXB0IGJldHdlZW4gQ1IgYW5kIExGXG52YXIgTEYgPSAzOyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBDTSA9IDQ7IC8vICBQcm9oaWJpdCBhIGxpbmUgYnJlYWsgYmV0d2VlbiB0aGUgY2hhcmFjdGVyIGFuZCB0aGUgcHJlY2VkaW5nIGNoYXJhY3RlclxudmFyIE5MID0gNTsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpXG52YXIgU0cgPSA2OyAvLyAgRG8gbm90IG9jY3VyIGluIHdlbGwtZm9ybWVkIHRleHRcbnZhciBXSiA9IDc7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyXG52YXIgWlcgPSA4OyAvLyAgUHJvdmlkZSBhIGJyZWFrIG9wcG9ydHVuaXR5XG52YXIgR0wgPSA5OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlIGFuZCBhZnRlclxudmFyIFNQID0gMTA7IC8vIEVuYWJsZSBpbmRpcmVjdCBsaW5lIGJyZWFrc1xudmFyIFpXSiA9IDExOyAvLyBQcm9oaWJpdCBsaW5lIGJyZWFrcyB3aXRoaW4gam9pbmVyIHNlcXVlbmNlc1xuLy8gQnJlYWsgT3Bwb3J0dW5pdGllc1xudmFyIEIyID0gMTI7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBiZWZvcmUgYW5kIGFmdGVyIHRoZSBjaGFyYWN0ZXJcbnZhciBCQSA9IDEzOyAvLyAgR2VuZXJhbGx5IHByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGFmdGVyIHRoZSBjaGFyYWN0ZXJcbnZhciBCQiA9IDE0OyAvLyAgR2VuZXJhbGx5IHByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGJlZm9yZSB0aGUgY2hhcmFjdGVyXG52YXIgSFkgPSAxNTsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGFmdGVyIHRoZSBjaGFyYWN0ZXIsIGV4Y2VwdCBpbiBudW1lcmljIGNvbnRleHRcbnZhciBDQiA9IDE2OyAvLyAgIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGNvbnRpbmdlbnQgb24gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuLy8gQ2hhcmFjdGVycyBQcm9oaWJpdGluZyBDZXJ0YWluIEJyZWFrc1xudmFyIENMID0gMTc7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBDUCA9IDE4OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgRVggPSAxOTsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIElOID0gMjA7IC8vICBBbGxvdyBvbmx5IGluZGlyZWN0IGxpbmUgYnJlYWtzIGJldHdlZW4gcGFpcnNcbnZhciBOUyA9IDIxOyAvLyAgQWxsb3cgb25seSBpbmRpcmVjdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBPUCA9IDIyOyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYWZ0ZXJcbnZhciBRVSA9IDIzOyAvLyAgQWN0IGxpa2UgdGhleSBhcmUgYm90aCBvcGVuaW5nIGFuZCBjbG9zaW5nXG4vLyBOdW1lcmljIENvbnRleHRcbnZhciBJUyA9IDI0OyAvLyAgUHJldmVudCBicmVha3MgYWZ0ZXIgYW55IGFuZCBiZWZvcmUgbnVtZXJpY1xudmFyIE5VID0gMjU7IC8vICBGb3JtIG51bWVyaWMgZXhwcmVzc2lvbnMgZm9yIGxpbmUgYnJlYWtpbmcgcHVycG9zZXNcbnZhciBQTyA9IDI2OyAvLyAgRG8gbm90IGJyZWFrIGZvbGxvd2luZyBhIG51bWVyaWMgZXhwcmVzc2lvblxudmFyIFBSID0gMjc7IC8vICBEbyBub3QgYnJlYWsgaW4gZnJvbnQgb2YgYSBudW1lcmljIGV4cHJlc3Npb25cbnZhciBTWSA9IDI4OyAvLyAgUHJldmVudCBhIGJyZWFrIGJlZm9yZTsgYW5kIGFsbG93IGEgYnJlYWsgYWZ0ZXJcbi8vIE90aGVyIENoYXJhY3RlcnNcbnZhciBBSSA9IDI5OyAvLyAgQWN0IGxpa2UgQUwgd2hlbiB0aGUgcmVzb2x2ZWRFQVcgaXMgTjsgb3RoZXJ3aXNlOyBhY3QgYXMgSURcbnZhciBBTCA9IDMwOyAvLyAgQXJlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBvciBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgd2l0aCBhbHBoYWJldGljIGNoYXJhY3RlcnNcbnZhciBDSiA9IDMxOyAvLyAgVHJlYXQgYXMgTlMgb3IgSUQgZm9yIHN0cmljdCBvciBub3JtYWwgYnJlYWtpbmcuXG52YXIgRUIgPSAzMjsgLy8gIERvIG5vdCBicmVhayBmcm9tIGZvbGxvd2luZyBFbW9qaSBNb2RpZmllclxudmFyIEVNID0gMzM7IC8vICBEbyBub3QgYnJlYWsgZnJvbSBwcmVjZWRpbmcgRW1vamkgQmFzZVxudmFyIEgyID0gMzQ7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBIMyA9IDM1OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSEwgPSAzNjsgLy8gIERvIG5vdCBicmVhayBhcm91bmQgYSBmb2xsb3dpbmcgaHlwaGVuOyBvdGhlcndpc2UgYWN0IGFzIEFscGhhYmV0aWNcbnZhciBJRCA9IDM3OyAvLyAgQnJlYWsgYmVmb3JlIG9yIGFmdGVyOyBleGNlcHQgaW4gc29tZSBudW1lcmljIGNvbnRleHRcbnZhciBKTCA9IDM4OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSlYgPSAzOTsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEpUID0gNDA7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBSSSA9IDQxOyAvLyAgS2VlcCBwYWlycyB0b2dldGhlci4gRm9yIHBhaXJzOyBicmVhayBiZWZvcmUgYW5kIGFmdGVyIG90aGVyIGNsYXNzZXNcbnZhciBTQSA9IDQyOyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgY29udGluZ2VudCBvbiBhZGRpdGlvbmFsLCBsYW5ndWFnZS1zcGVjaWZpYyBjb250ZXh0IGFuYWx5c2lzXG52YXIgWFggPSA0MzsgLy8gIEhhdmUgYXMgeWV0IHVua25vd24gbGluZSBicmVha2luZyBiZWhhdmlvciBvciB1bmFzc2lnbmVkIGNvZGUgcG9zaXRpb25zXG5cbnZhciBjbGFzc2VzID0gZXhwb3J0cy5jbGFzc2VzID0ge1xuICAgIEJLOiBCSyxcbiAgICBDUjogQ1IsXG4gICAgTEY6IExGLFxuICAgIENNOiBDTSxcbiAgICBOTDogTkwsXG4gICAgU0c6IFNHLFxuICAgIFdKOiBXSixcbiAgICBaVzogWlcsXG4gICAgR0w6IEdMLFxuICAgIFNQOiBTUCxcbiAgICBaV0o6IFpXSixcbiAgICBCMjogQjIsXG4gICAgQkE6IEJBLFxuICAgIEJCOiBCQixcbiAgICBIWTogSFksXG4gICAgQ0I6IENCLFxuICAgIENMOiBDTCxcbiAgICBDUDogQ1AsXG4gICAgRVg6IEVYLFxuICAgIElOOiBJTixcbiAgICBOUzogTlMsXG4gICAgT1A6IE9QLFxuICAgIFFVOiBRVSxcbiAgICBJUzogSVMsXG4gICAgTlU6IE5VLFxuICAgIFBPOiBQTyxcbiAgICBQUjogUFIsXG4gICAgU1k6IFNZLFxuICAgIEFJOiBBSSxcbiAgICBBTDogQUwsXG4gICAgQ0o6IENKLFxuICAgIEVCOiBFQixcbiAgICBFTTogRU0sXG4gICAgSDI6IEgyLFxuICAgIEgzOiBIMyxcbiAgICBITDogSEwsXG4gICAgSUQ6IElELFxuICAgIEpMOiBKTCxcbiAgICBKVjogSlYsXG4gICAgSlQ6IEpULFxuICAgIFJJOiBSSSxcbiAgICBTQTogU0EsXG4gICAgWFg6IFhYXG59O1xuXG52YXIgQlJFQUtfTUFOREFUT1JZID0gZXhwb3J0cy5CUkVBS19NQU5EQVRPUlkgPSAnISc7XG52YXIgQlJFQUtfTk9UX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX05PVF9BTExPV0VEID0gJ8OXJztcbnZhciBCUkVBS19BTExPV0VEID0gZXhwb3J0cy5CUkVBS19BTExPV0VEID0gJ8O3JztcbnZhciBVbmljb2RlVHJpZSA9IGV4cG9ydHMuVW5pY29kZVRyaWUgPSAoMCwgX1RyaWUuY3JlYXRlVHJpZUZyb21CYXNlNjQpKF9saW5lYnJlYWtUcmllMi5kZWZhdWx0KTtcblxudmFyIEFMUEhBQkVUSUNTID0gW0FMLCBITF07XG52YXIgSEFSRF9MSU5FX0JSRUFLUyA9IFtCSywgQ1IsIExGLCBOTF07XG52YXIgU1BBQ0UgPSBbU1AsIFpXXTtcbnZhciBQUkVGSVhfUE9TVEZJWCA9IFtQUiwgUE9dO1xudmFyIExJTkVfQlJFQUtTID0gSEFSRF9MSU5FX0JSRUFLUy5jb25jYXQoU1BBQ0UpO1xudmFyIEtPUkVBTl9TWUxMQUJMRV9CTE9DSyA9IFtKTCwgSlYsIEpULCBIMiwgSDNdO1xudmFyIEhZUEhFTiA9IFtIWSwgQkFdO1xuXG52YXIgY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGV4cG9ydHMuY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3NlcyA9IGZ1bmN0aW9uIGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cykge1xuICAgIHZhciBsaW5lQnJlYWsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzdHJpY3QnO1xuXG4gICAgdmFyIHR5cGVzID0gW107XG4gICAgdmFyIGluZGljaWVzID0gW107XG4gICAgdmFyIGNhdGVnb3JpZXMgPSBbXTtcbiAgICBjb2RlUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVQb2ludCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsYXNzVHlwZSA9IFVuaWNvZGVUcmllLmdldChjb2RlUG9pbnQpO1xuICAgICAgICBpZiAoY2xhc3NUeXBlID4gTEVUVEVSX05VTUJFUl9NT0RJRklFUikge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHRydWUpO1xuICAgICAgICAgICAgY2xhc3NUeXBlIC09IExFVFRFUl9OVU1CRVJfTU9ESUZJRVI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFsnbm9ybWFsJywgJ2F1dG8nLCAnbG9vc2UnXS5pbmRleE9mKGxpbmVCcmVhaykgIT09IC0xKSB7XG4gICAgICAgICAgICAvLyBVKzIwMTAsIOKAkyBVKzIwMTMsIOOAnCBVKzMwMUMsIOOCoCBVKzMwQTBcbiAgICAgICAgICAgIGlmIChbMHgyMDEwLCAweDIwMTMsIDB4MzAxYywgMHgzMGEwXS5pbmRleE9mKGNvZGVQb2ludCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQ0IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQ00gfHwgY2xhc3NUeXBlID09PSBaV0opIHtcbiAgICAgICAgICAgIC8vIExCMTAgVHJlYXQgYW55IHJlbWFpbmluZyBjb21iaW5pbmcgbWFyayBvciBaV0ogYXMgQUwuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIExCOSBEbyBub3QgYnJlYWsgYSBjb21iaW5pbmcgY2hhcmFjdGVyIHNlcXVlbmNlOyB0cmVhdCBpdCBhcyBpZiBpdCBoYXMgdGhlIGxpbmUgYnJlYWtpbmcgY2xhc3Mgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBiYXNlIGNoYXJhY3RlciBpbiBhbGwgb2YgdGhlIGZvbGxvd2luZyBydWxlcy4gVHJlYXQgWldKIGFzIGlmIGl0IHdlcmUgQ00uXG4gICAgICAgICAgICB2YXIgcHJldiA9IHR5cGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICBpZiAoTElORV9CUkVBS1MuaW5kZXhPZihwcmV2KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGljaWVzW2luZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kaWNpZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBDSikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2gobGluZUJyZWFrID09PSAnc3RyaWN0JyA/IE5TIDogSUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gU0EpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IEFJKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChBTCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3Igc3VwcGxlbWVudGFyeSBjaGFyYWN0ZXJzLCBhIHVzZWZ1bCBkZWZhdWx0IGlzIHRvIHRyZWF0IGNoYXJhY3RlcnMgaW4gdGhlIHJhbmdlIDEwMDAwLi4xRkZGRCBhcyBBTFxuICAgICAgICAvLyBhbmQgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2VzIDIwMDAwLi4yRkZGRCBhbmQgMzAwMDAuLjNGRkZEIGFzIElELCB1bnRpbCB0aGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHJldmlzZWRcbiAgICAgICAgLy8gdG8gdGFrZSBpbnRvIGFjY291bnQgdGhlIGFjdHVhbCBsaW5lIGJyZWFraW5nIHByb3BlcnRpZXMgZm9yIHRoZXNlIGNoYXJhY3RlcnMuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IFhYKSB7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4MjAwMDAgJiYgY29kZVBvaW50IDw9IDB4MmZmZmQgfHwgY29kZVBvaW50ID49IDB4MzAwMDAgJiYgY29kZVBvaW50IDw9IDB4M2ZmZmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChJRCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzLnB1c2goY2xhc3NUeXBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbaW5kaWNpZXMsIHR5cGVzLCBjYXRlZ29yaWVzXTtcbn07XG5cbnZhciBpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZCA9IGZ1bmN0aW9uIGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKGEsIGIsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykge1xuICAgIHZhciBjdXJyZW50ID0gY2xhc3NUeXBlc1tjdXJyZW50SW5kZXhdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpID8gYS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSA6IGEgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIGkgPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChpIDw9IGNsYXNzVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGNsYXNzVHlwZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0ID09PSBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNQKSB7XG4gICAgICAgIHZhciBfaSA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgICB3aGlsZSAoX2kgPiAwKSB7XG4gICAgICAgICAgICBfaS0tO1xuICAgICAgICAgICAgdmFyIHByZXYgPSBjbGFzc1R5cGVzW19pXTtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgPyBhLmluZGV4T2YocHJldikgIT09IC0xIDogYSA9PT0gcHJldikge1xuICAgICAgICAgICAgICAgIHZhciBuID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGNsYXNzVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9uZXh0ID0gY2xhc3NUeXBlc1tuXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX25leHQgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9uZXh0ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2ICE9PSBTUCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlID0gZnVuY3Rpb24gcHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpIHtcbiAgICB2YXIgaSA9IGN1cnJlbnRJbmRleDtcbiAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgIHZhciB0eXBlID0gY2xhc3NUeXBlc1tpXTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFNQKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbnZhciBfbGluZUJyZWFrQXRJbmRleCA9IGZ1bmN0aW9uIF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpbmRleCwgZm9yYmlkZGVuQnJlYWtzKSB7XG4gICAgaWYgKGluZGljaWVzW2luZGV4XSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JiaWRkZW5CcmVha3MpICYmIGZvcmJpZGRlbkJyZWFrc1tjdXJyZW50SW5kZXhdID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICB2YXIgYmVmb3JlSW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHZhciBhZnRlckluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICB2YXIgY3VycmVudCA9IGNsYXNzVHlwZXNbY3VycmVudEluZGV4XTtcblxuICAgIC8vIExCNCBBbHdheXMgYnJlYWsgYWZ0ZXIgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICAvLyBMQjUgVHJlYXQgQ1IgZm9sbG93ZWQgYnkgTEYsIGFzIHdlbGwgYXMgQ1IsIExGLCBhbmQgTkwgYXMgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICB2YXIgYmVmb3JlID0gYmVmb3JlSW5kZXggPj0gMCA/IGNsYXNzVHlwZXNbYmVmb3JlSW5kZXhdIDogMDtcbiAgICB2YXIgbmV4dCA9IGNsYXNzVHlwZXNbYWZ0ZXJJbmRleF07XG5cbiAgICBpZiAoY3VycmVudCA9PT0gQ1IgJiYgbmV4dCA9PT0gTEYpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIGlmIChIQVJEX0xJTkVfQlJFQUtTLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19NQU5EQVRPUlk7XG4gICAgfVxuXG4gICAgLy8gTEI2IERvIG5vdCBicmVhayBiZWZvcmUgaGFyZCBsaW5lIGJyZWFrcy5cbiAgICBpZiAoSEFSRF9MSU5FX0JSRUFLUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI3IERvIG5vdCBicmVhayBiZWZvcmUgc3BhY2VzIG9yIHplcm8gd2lkdGggc3BhY2UuXG4gICAgaWYgKFNQQUNFLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjggQnJlYWsgYmVmb3JlIGFueSBjaGFyYWN0ZXIgZm9sbG93aW5nIGEgemVyby13aWR0aCBzcGFjZSwgZXZlbiBpZiBvbmUgb3IgbW9yZSBzcGFjZXMgaW50ZXJ2ZW5lLlxuICAgIGlmIChwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykgPT09IFpXKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCOGEgRG8gbm90IGJyZWFrIGJldHdlZW4gYSB6ZXJvIHdpZHRoIGpvaW5lciBhbmQgYW4gaWRlb2dyYXBoLCBlbW9qaSBiYXNlIG9yIGVtb2ppIG1vZGlmaWVyLlxuICAgIGlmIChVbmljb2RlVHJpZS5nZXQoY29kZVBvaW50c1tjdXJyZW50SW5kZXhdKSA9PT0gWldKICYmIChuZXh0ID09PSBJRCB8fCBuZXh0ID09PSBFQiB8fCBuZXh0ID09PSBFTSkpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTEgRG8gbm90IGJyZWFrIGJlZm9yZSBvciBhZnRlciBXb3JkIGpvaW5lciBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBXSiB8fCBuZXh0ID09PSBXSikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMiBEbyBub3QgYnJlYWsgYWZ0ZXIgTkJTUCBhbmQgcmVsYXRlZCBjaGFyYWN0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBHTCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMmEgRG8gbm90IGJyZWFrIGJlZm9yZSBOQlNQIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMsIGV4Y2VwdCBhZnRlciBzcGFjZXMgYW5kIGh5cGhlbnMuXG4gICAgaWYgKFtTUCwgQkEsIEhZXS5pbmRleE9mKGN1cnJlbnQpID09PSAtMSAmJiBuZXh0ID09PSBHTCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMyBEbyBub3QgYnJlYWsgYmVmb3JlIOKAmF3igJkgb3Ig4oCYIeKAmSBvciDigJg74oCZIG9yIOKAmC/igJksIGV2ZW4gYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChbQ0wsIENQLCBFWCwgSVMsIFNZXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNCBEbyBub3QgYnJlYWsgYWZ0ZXIg4oCYW+KAmSwgZXZlbiBhZnRlciBzcGFjZXMuXG4gICAgaWYgKHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSA9PT0gT1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTUgRG8gbm90IGJyZWFrIHdpdGhpbiDigJjigJ1b4oCZLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChRVSwgT1AsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTYgRG8gbm90IGJyZWFrIGJldHdlZW4gY2xvc2luZyBwdW5jdHVhdGlvbiBhbmQgYSBub25zdGFydGVyIChsYj1OUyksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKFtDTCwgQ1BdLCBOUywgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNyBEbyBub3QgYnJlYWsgd2l0aGluIOKAmOKAlOKAlOKAmSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoQjIsIEIyLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE4IEJyZWFrIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAoY3VycmVudCA9PT0gU1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxOSBEbyBub3QgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIHF1b3RhdGlvbiBtYXJrcywgc3VjaCBhcyDigJgg4oCdIOKAmS5cbiAgICBpZiAoY3VycmVudCA9PT0gUVUgfHwgbmV4dCA9PT0gUVUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjAgQnJlYWsgYmVmb3JlIGFuZCBhZnRlciB1bnJlc29sdmVkIENCLlxuICAgIGlmIChuZXh0ID09PSBDQiB8fCBjdXJyZW50ID09PSBDQikge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxIERvIG5vdCBicmVhayBiZWZvcmUgaHlwaGVuLW1pbnVzLCBvdGhlciBoeXBoZW5zLCBmaXhlZC13aWR0aCBzcGFjZXMsIHNtYWxsIGthbmEsIGFuZCBvdGhlciBub24tc3RhcnRlcnMsIG9yIGFmdGVyIGFjdXRlIGFjY2VudHMuXG4gICAgaWYgKFtCQSwgSFksIE5TXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBjdXJyZW50ID09PSBCQikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMWEgRG9uJ3QgYnJlYWsgYWZ0ZXIgSGVicmV3ICsgSHlwaGVuLlxuICAgIGlmIChiZWZvcmUgPT09IEhMICYmIEhZUEhFTi5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMWIgRG9u4oCZdCBicmVhayBiZXR3ZWVuIFNvbGlkdXMgYW5kIEhlYnJldyBsZXR0ZXJzLlxuICAgIGlmIChjdXJyZW50ID09PSBTWSAmJiBuZXh0ID09PSBITCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMiBEbyBub3QgYnJlYWsgYmV0d2VlbiB0d28gZWxsaXBzZXMsIG9yIGJldHdlZW4gbGV0dGVycywgbnVtYmVycyBvciBleGNsYW1hdGlvbnMgYW5kIGVsbGlwc2lzLlxuICAgIGlmIChuZXh0ID09PSBJTiAmJiBBTFBIQUJFVElDUy5jb25jYXQoSU4sIEVYLCBOVSwgSUQsIEVCLCBFTSkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjMgRG8gbm90IGJyZWFrIGJldHdlZW4gZGlnaXRzIGFuZCBsZXR0ZXJzLlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBOVSB8fCBBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBOVSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyM2EgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwcmVmaXhlcyBhbmQgaWRlb2dyYXBocywgb3IgYmV0d2VlbiBpZGVvZ3JhcGhzIGFuZCBudW1lcmljIHBvc3RmaXhlcy5cbiAgICBpZiAoY3VycmVudCA9PT0gUFIgJiYgW0lELCBFQiwgRU1dLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtJRCwgRUIsIEVNXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBQTykge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNCBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHByZWZpeC9wb3N0Zml4IGFuZCBsZXR0ZXJzLCBvciBiZXR3ZWVuIGxldHRlcnMgYW5kIHByZWZpeC9wb3N0Zml4LlxuICAgIGlmIChBTFBIQUJFVElDUy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBQUkVGSVhfUE9TVEZJWC5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBQUkVGSVhfUE9TVEZJWC5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyNSBEbyBub3QgYnJlYWsgYmV0d2VlbiB0aGUgZm9sbG93aW5nIHBhaXJzIG9mIGNsYXNzZXMgcmVsZXZhbnQgdG8gbnVtYmVyczpcbiAgICBpZiAoXG4gICAgLy8gKFBSIHwgUE8pIMOXICggT1AgfCBIWSApPyBOVVxuICAgIFtQUiwgUE9dLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIChuZXh0ID09PSBOVSB8fCBbT1AsIEhZXS5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjbGFzc1R5cGVzW2FmdGVySW5kZXggKyAxXSA9PT0gTlUpIHx8XG4gICAgLy8gKCBPUCB8IEhZICkgw5cgTlVcbiAgICBbT1AsIEhZXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBuZXh0ID09PSBOVSB8fFxuICAgIC8vIE5VIMOXXHQoTlUgfCBTWSB8IElTKVxuICAgIGN1cnJlbnQgPT09IE5VICYmIFtOVSwgU1ksIElTXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTlUgKE5VIHwgU1kgfCBJUykqIMOXIChOVSB8IFNZIHwgSVMgfCBDTCB8IENQKVxuICAgIGlmIChbTlUsIFNZLCBJUywgQ0wsIENQXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gY2xhc3NUeXBlc1twcmV2SW5kZXhdO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IE5VKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbU1ksIElTXS5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5VIChOVSB8IFNZIHwgSVMpKiAoQ0wgfCBDUCk/IMOXIChQTyB8IFBSKSlcbiAgICBpZiAoW1BSLCBQT10uaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIF9wcmV2SW5kZXggPSBbQ0wsIENQXS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSA/IGJlZm9yZUluZGV4IDogY3VycmVudEluZGV4O1xuICAgICAgICB3aGlsZSAoX3ByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgX3R5cGUgPSBjbGFzc1R5cGVzW19wcmV2SW5kZXhdO1xuICAgICAgICAgICAgaWYgKF90eXBlID09PSBOVSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW1NZLCBJU10uaW5kZXhPZihfdHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgX3ByZXZJbmRleC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExCMjYgRG8gbm90IGJyZWFrIGEgS29yZWFuIHN5bGxhYmxlLlxuICAgIGlmIChKTCA9PT0gY3VycmVudCAmJiBbSkwsIEpWLCBIMiwgSDNdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtKViwgSDJdLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFtKViwgSlRdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFtKVCwgSDNdLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IEpUKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI3IFRyZWF0IGEgS29yZWFuIFN5bGxhYmxlIEJsb2NrIHRoZSBzYW1lIGFzIElELlxuICAgIGlmIChLT1JFQU5fU1lMTEFCTEVfQkxPQ0suaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgW0lOLCBQT10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgS09SRUFOX1NZTExBQkxFX0JMT0NLLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IFBSKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI4IERvIG5vdCBicmVhayBiZXR3ZWVuIGFscGhhYmV0aWNzICjigJxhdOKAnSkuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI5IERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHVuY3R1YXRpb24gYW5kIGFscGhhYmV0aWNzICjigJxlLmcu4oCdKS5cbiAgICBpZiAoY3VycmVudCA9PT0gSVMgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMzAgRG8gbm90IGJyZWFrIGJldHdlZW4gbGV0dGVycywgbnVtYmVycywgb3Igb3JkaW5hcnkgc3ltYm9scyBhbmQgb3BlbmluZyBvciBjbG9zaW5nIHBhcmVudGhlc2VzLlxuICAgIGlmIChBTFBIQUJFVElDUy5jb25jYXQoTlUpLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE9QIHx8IEFMUEhBQkVUSUNTLmNvbmNhdChOVSkuaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gQ1ApIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMzBhIEJyZWFrIGJldHdlZW4gdHdvIHJlZ2lvbmFsIGluZGljYXRvciBzeW1ib2xzIGlmIGFuZCBvbmx5IGlmIHRoZXJlIGFyZSBhbiBldmVuIG51bWJlciBvZiByZWdpb25hbFxuICAgIC8vIGluZGljYXRvcnMgcHJlY2VkaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgYnJlYWsuXG4gICAgaWYgKGN1cnJlbnQgPT09IFJJICYmIG5leHQgPT09IFJJKSB7XG4gICAgICAgIHZhciBpID0gaW5kaWNpZXNbY3VycmVudEluZGV4XTtcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBpZiAoY2xhc3NUeXBlc1tpXSA9PT0gUkkpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMQjMwYiBEbyBub3QgYnJlYWsgYmV0d2VlbiBhbiBlbW9qaSBiYXNlIGFuZCBhbiBlbW9qaSBtb2RpZmllci5cbiAgICBpZiAoY3VycmVudCA9PT0gRUIgJiYgbmV4dCA9PT0gRU0pIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xufTtcblxudmFyIGxpbmVCcmVha0F0SW5kZXggPSBleHBvcnRzLmxpbmVCcmVha0F0SW5kZXggPSBmdW5jdGlvbiBsaW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGluZGV4KSB7XG4gICAgLy8gTEIyIE5ldmVyIGJyZWFrIGF0IHRoZSBzdGFydCBvZiB0ZXh0LlxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzIEFsd2F5cyBicmVhayBhdCB0aGUgZW5kIG9mIHRleHQuXG4gICAgaWYgKGluZGV4ID49IGNvZGVQb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19NQU5EQVRPUlk7XG4gICAgfVxuXG4gICAgdmFyIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZSA9IGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cyksXG4gICAgICAgIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTIgPSBfc2xpY2VkVG9BcnJheShfY29kZVBvaW50c1RvQ2hhcmFjdGUsIDIpLFxuICAgICAgICBpbmRpY2llcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTJbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGUyWzFdO1xuXG4gICAgcmV0dXJuIF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpbmRleCk7XG59O1xuXG52YXIgY3NzRm9ybWF0dGVkQ2xhc3NlcyA9IGZ1bmN0aW9uIGNzc0Zvcm1hdHRlZENsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0geyBsaW5lQnJlYWs6ICdub3JtYWwnLCB3b3JkQnJlYWs6ICdub3JtYWwnIH07XG4gICAgfVxuXG4gICAgdmFyIF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTMgPSBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMubGluZUJyZWFrKSxcbiAgICAgICAgX2NvZGVQb2ludHNUb0NoYXJhY3RlNCA9IF9zbGljZWRUb0FycmF5KF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY29kZVBvaW50c1RvQ2hhcmFjdGU0WzFdLFxuICAgICAgICBpc0xldHRlck51bWJlciA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMl07XG5cbiAgICBpZiAob3B0aW9ucy53b3JkQnJlYWsgPT09ICdicmVhay1hbGwnIHx8IG9wdGlvbnMud29yZEJyZWFrID09PSAnYnJlYWstd29yZCcpIHtcbiAgICAgICAgY2xhc3NUeXBlcyA9IGNsYXNzVHlwZXMubWFwKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gW05VLCBBTCwgU0FdLmluZGV4T2YodHlwZSkgIT09IC0xID8gSUQgOiB0eXBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBvcHRpb25zLndvcmRCcmVhayA9PT0gJ2tlZXAtYWxsJyA/IGlzTGV0dGVyTnVtYmVyLm1hcChmdW5jdGlvbiAoaXNMZXR0ZXJOdW1iZXIsIGkpIHtcbiAgICAgICAgcmV0dXJuIGlzTGV0dGVyTnVtYmVyICYmIGNvZGVQb2ludHNbaV0gPj0gMHg0ZTAwICYmIGNvZGVQb2ludHNbaV0gPD0gMHg5ZmZmO1xuICAgIH0pIDogbnVsbDtcblxuICAgIHJldHVybiBbaW5kaWNpZXMsIGNsYXNzVHlwZXMsIGZvcmJpZGRlbkJyZWFrcG9pbnRzXTtcbn07XG5cbnZhciBpbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBleHBvcnRzLmlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGZ1bmN0aW9uIGlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9ICgwLCBfVXRpbC50b0NvZGVQb2ludHMpKHN0cik7XG4gICAgdmFyIG91dHB1dCA9IEJSRUFLX05PVF9BTExPV0VEO1xuXG4gICAgdmFyIF9jc3NGb3JtYXR0ZWRDbGFzc2VzID0gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSxcbiAgICAgICAgX2Nzc0Zvcm1hdHRlZENsYXNzZXMyID0gX3NsaWNlZFRvQXJyYXkoX2Nzc0Zvcm1hdHRlZENsYXNzZXMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlsxXSxcbiAgICAgICAgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczJbMl07XG5cbiAgICBjb2RlUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVQb2ludCwgaSkge1xuICAgICAgICBvdXRwdXQgKz0gKDAsIF9VdGlsLmZyb21Db2RlUG9pbnQpKGNvZGVQb2ludCkgKyAoaSA+PSBjb2RlUG9pbnRzLmxlbmd0aCAtIDEgPyBCUkVBS19NQU5EQVRPUlkgOiBfbGluZUJyZWFrQXRJbmRleChjb2RlUG9pbnRzLCBjbGFzc1R5cGVzLCBpbmRpY2llcywgaSArIDEsIGZvcmJpZGRlbkJyZWFrcG9pbnRzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcblxudmFyIEJyZWFrID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyZWFrKGNvZGVQb2ludHMsIGxpbmVCcmVhaywgc3RhcnQsIGVuZCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJlYWspO1xuXG4gICAgICAgIHRoaXMuX2NvZGVQb2ludHMgPSBjb2RlUG9pbnRzO1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gbGluZUJyZWFrID09PSBCUkVBS19NQU5EQVRPUlk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJyZWFrLCBbe1xuICAgICAgICBrZXk6ICdzbGljZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzbGljZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfVXRpbC5mcm9tQ29kZVBvaW50LmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2NvZGVQb2ludHMuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQnJlYWs7XG59KCk7XG5cbnZhciBMaW5lQnJlYWtlciA9IGV4cG9ydHMuTGluZUJyZWFrZXIgPSBmdW5jdGlvbiBMaW5lQnJlYWtlcihzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29kZVBvaW50cyA9ICgwLCBfVXRpbC50b0NvZGVQb2ludHMpKHN0cik7XG5cbiAgICB2YXIgX2Nzc0Zvcm1hdHRlZENsYXNzZXMzID0gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSxcbiAgICAgICAgX2Nzc0Zvcm1hdHRlZENsYXNzZXM0ID0gX3NsaWNlZFRvQXJyYXkoX2Nzc0Zvcm1hdHRlZENsYXNzZXMzLCAzKSxcbiAgICAgICAgaW5kaWNpZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMF0sXG4gICAgICAgIGNsYXNzVHlwZXMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMV0sXG4gICAgICAgIGZvcmJpZGRlbkJyZWFrcG9pbnRzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXM0WzJdO1xuXG4gICAgdmFyIGxlbmd0aCA9IGNvZGVQb2ludHMubGVuZ3RoO1xuICAgIHZhciBsYXN0RW5kID0gMDtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAobmV4dEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaW5lQnJlYWsgPSBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0SW5kZXggPCBsZW5ndGggJiYgKGxpbmVCcmVhayA9IF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCArK25leHRJbmRleCwgZm9yYmlkZGVuQnJlYWtwb2ludHMpKSA9PT0gQlJFQUtfTk9UX0FMTE9XRUQpIHt9XG5cbiAgICAgICAgICAgIGlmIChsaW5lQnJlYWsgIT09IEJSRUFLX05PVF9BTExPV0VEIHx8IG5leHRJbmRleCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV3IEJyZWFrKGNvZGVQb2ludHMsIGxpbmVCcmVhaywgbGFzdEVuZCwgbmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICBsYXN0RW5kID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRyaWUgPSBleHBvcnRzLmNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9NQVNLID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfREFUQV9NQVNLID0gZXhwb3J0cy5VVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMV8yID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfU0hJRlQgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMiA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKiBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0yIHRhYmxlIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMiA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzIgPSA1O1xuXG4vKiogU2hpZnQgc2l6ZSBmb3IgZ2V0dGluZyB0aGUgaW5kZXgtMSB0YWJsZSBvZmZzZXQuICovXG52YXIgVVRSSUUyX1NISUZUXzEgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xID0gNiArIDU7XG5cbi8qKlxuICogU2hpZnQgc2l6ZSBmb3Igc2hpZnRpbmcgbGVmdCB0aGUgaW5kZXggYXJyYXkgdmFsdWVzLlxuICogSW5jcmVhc2VzIHBvc3NpYmxlIGRhdGEgc2l6ZSB3aXRoIDE2LWJpdCBpbmRleCB2YWx1ZXMgYXQgdGhlIGNvc3RcbiAqIG9mIGNvbXBhY3RhYmlsaXR5LlxuICogVGhpcyByZXF1aXJlcyBkYXRhIGJsb2NrcyB0byBiZSBhbGlnbmVkIGJ5IFVUUklFMl9EQVRBX0dSQU5VTEFSSVRZLlxuICovXG52YXIgVVRSSUUyX0lOREVYX1NISUZUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfU0hJRlQgPSAyO1xuXG4vKipcbiAqIERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIHNoaWZ0IHNpemVzLFxuICogZm9yIGdldHRpbmcgYW4gaW5kZXgtMSBvZmZzZXQgZnJvbSBhbiBpbmRleC0yIG9mZnNldC4gNj0xMS01XG4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMV8yID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMV8yID0gVVRSSUUyX1NISUZUXzEgLSBVVFJJRTJfU0hJRlRfMjtcblxuLyoqXG4gKiBUaGUgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb3IgVStEODAwLi5VK0RCRkYgc3RvcmVzIHZhbHVlcyBmb3JcbiAqIGxlYWQgc3Vycm9nYXRlIGNvZGUgX3VuaXRzXyBub3QgY29kZSBfcG9pbnRzXy5cbiAqIFZhbHVlcyBmb3IgbGVhZCBzdXJyb2dhdGUgY29kZSBfcG9pbnRzXyBhcmUgaW5kZXhlZCB3aXRoIHRoaXMgcG9ydGlvbiBvZiB0aGUgdGFibGUuXG4gKiBMZW5ndGg9MzI9MHgyMD0weDQwMD4+VVRSSUUyX1NISUZUXzIuIChUaGVyZSBhcmUgMTAyND0weDQwMCBsZWFkIHN1cnJvZ2F0ZXMuKVxuICovXG52YXIgVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUID0gMHgxMDAwMCA+PiBVVFJJRTJfU0hJRlRfMjtcblxuLyoqIE51bWJlciBvZiBlbnRyaWVzIGluIGEgZGF0YSBibG9jay4gMzI9MHgyMCAqL1xudmFyIFVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gMSA8PCBVVFJJRTJfU0hJRlRfMjtcbi8qKiBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4tZGF0YS1ibG9jayBvZmZzZXQuICovXG52YXIgVVRSSUUyX0RBVEFfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0RBVEFfTUFTSyA9IFVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCAtIDE7XG5cbnZhciBVVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSAweDQwMCA+PiBVVFJJRTJfU0hJRlRfMjtcbi8qKiBDb3VudCB0aGUgbGVuZ3RocyBvZiBib3RoIEJNUCBwaWVjZXMuIDIwODA9MHg4MjAgKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIID0gVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgKyBVVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSDtcbi8qKlxuICogVGhlIDItYnl0ZSBVVEYtOCB2ZXJzaW9uIG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvbGxvd3MgYXQgb2Zmc2V0IDIwODA9MHg4MjAuXG4gKiBMZW5ndGggMzI9MHgyMCBmb3IgbGVhZCBieXRlcyBDMC4uREYsIHJlZ2FyZGxlc3Mgb2YgVVRSSUUyX1NISUZUXzIuXG4gKi9cbnZhciBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBVVFJJRTJfSU5ERVhfMl9CTVBfTEVOR1RIO1xudmFyIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSCA9IDB4ODAwID4+IDY7IC8qIFUrMDgwMCBpcyB0aGUgZmlyc3QgY29kZSBwb2ludCBhZnRlciAyLWJ5dGUgVVRGLTggKi9cbi8qKlxuICogVGhlIGluZGV4LTEgdGFibGUsIG9ubHkgdXNlZCBmb3Igc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cywgYXQgb2Zmc2V0IDIxMTI9MHg4NDAuXG4gKiBWYXJpYWJsZSBsZW5ndGgsIGZvciBjb2RlIHBvaW50cyB1cCB0byBoaWdoU3RhcnQsIHdoZXJlIHRoZSBsYXN0IHNpbmdsZS12YWx1ZSByYW5nZSBzdGFydHMuXG4gKiBNYXhpbXVtIGxlbmd0aCA1MTI9MHgyMDA9MHgxMDAwMDA+PlVUUklFMl9TSElGVF8xLlxuICogKEZvciAweDEwMDAwMCBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIFUrMTAwMDAuLlUrMTBmZmZmLilcbiAqXG4gKiBUaGUgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZSBmb3Igc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cyBzdGFydHNcbiAqIGFmdGVyIHRoaXMgaW5kZXgtMSB0YWJsZS5cbiAqXG4gKiBCb3RoIHRoZSBpbmRleC0xIHRhYmxlIGFuZCB0aGUgZm9sbG93aW5nIHBhcnQgb2YgdGhlIGluZGV4LTIgdGFibGVcbiAqIGFyZSBvbWl0dGVkIGNvbXBsZXRlbHkgaWYgdGhlcmUgaXMgb25seSBCTVAgZGF0YS5cbiAqL1xudmFyIFVUUklFMl9JTkRFWF8xX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9PRkZTRVQgKyBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX0xFTkdUSDtcblxuLyoqXG4gKiBOdW1iZXIgb2YgaW5kZXgtMSBlbnRyaWVzIGZvciB0aGUgQk1QLiAzMj0weDIwXG4gKiBUaGlzIHBhcnQgb2YgdGhlIGluZGV4LTEgdGFibGUgaXMgb21pdHRlZCBmcm9tIHRoZSBzZXJpYWxpemVkIGZvcm0uXG4gKi9cbnZhciBVVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IDB4MTAwMDAgPj4gVVRSSUUyX1NISUZUXzE7XG5cbi8qKiBOdW1iZXIgb2YgZW50cmllcyBpbiBhbiBpbmRleC0yIGJsb2NrLiA2ND0weDQwICovXG52YXIgVVRSSUUyX0lOREVYXzJfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSAxIDw8IFVUUklFMl9TSElGVF8xXzI7XG4vKiogTWFzayBmb3IgZ2V0dGluZyB0aGUgbG93ZXIgYml0cyBmb3IgdGhlIGluLWluZGV4LTItYmxvY2sgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9JTkRFWF8yX01BU0sgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX01BU0sgPSBVVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggLSAxO1xuXG52YXIgY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBleHBvcnRzLmNyZWF0ZVRyaWVGcm9tQmFzZTY0ID0gZnVuY3Rpb24gY3JlYXRlVHJpZUZyb21CYXNlNjQoYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlciA9ICgwLCBfVXRpbC5kZWNvZGUpKGJhc2U2NCk7XG4gICAgdmFyIHZpZXczMiA9IEFycmF5LmlzQXJyYXkoYnVmZmVyKSA/ICgwLCBfVXRpbC5wb2x5VWludDMyQXJyYXkpKGJ1ZmZlcikgOiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgdmlldzE2ID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gKDAsIF9VdGlsLnBvbHlVaW50MTZBcnJheSkoYnVmZmVyKSA6IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICAgIHZhciBoZWFkZXJMZW5ndGggPSAyNDtcblxuICAgIHZhciBpbmRleCA9IHZpZXcxNi5zbGljZShoZWFkZXJMZW5ndGggLyAyLCB2aWV3MzJbNF0gLyAyKTtcbiAgICB2YXIgZGF0YSA9IHZpZXczMls1XSA9PT0gMiA/IHZpZXcxNi5zbGljZSgoaGVhZGVyTGVuZ3RoICsgdmlldzMyWzRdKSAvIDIpIDogdmlldzMyLnNsaWNlKE1hdGguY2VpbCgoaGVhZGVyTGVuZ3RoICsgdmlldzMyWzRdKSAvIDQpKTtcblxuICAgIHJldHVybiBuZXcgVHJpZSh2aWV3MzJbMF0sIHZpZXczMlsxXSwgdmlldzMyWzJdLCB2aWV3MzJbM10sIGluZGV4LCBkYXRhKTtcbn07XG5cbnZhciBUcmllID0gZXhwb3J0cy5UcmllID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyaWUoaW5pdGlhbFZhbHVlLCBlcnJvclZhbHVlLCBoaWdoU3RhcnQsIGhpZ2hWYWx1ZUluZGV4LCBpbmRleCwgZGF0YSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgIHRoaXMuZXJyb3JWYWx1ZSA9IGVycm9yVmFsdWU7XG4gICAgICAgIHRoaXMuaGlnaFN0YXJ0ID0gaGlnaFN0YXJ0O1xuICAgICAgICB0aGlzLmhpZ2hWYWx1ZUluZGV4ID0gaGlnaFZhbHVlSW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIGZvciBhIGNvZGUgcG9pbnQgYXMgc3RvcmVkIGluIHRoZSBUcmllLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGVQb2ludCB0aGUgY29kZSBwb2ludFxuICAgICAqIEByZXR1cm4gdGhlIHZhbHVlXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhUcmllLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGNvZGVQb2ludCkge1xuICAgICAgICAgICAgdmFyIGl4ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8IDB4MGQ4MDAgfHwgY29kZVBvaW50ID4gMHgwZGJmZiAmJiBjb2RlUG9pbnQgPD0gMHgwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBPcmRpbmFyeSBCTVAgY29kZSBwb2ludCwgZXhjbHVkaW5nIGxlYWRpbmcgc3Vycm9nYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gQk1QIHVzZXMgYSBzaW5nbGUgbGV2ZWwgbG9va3VwLiAgQk1QIGluZGV4IHN0YXJ0cyBhdCBvZmZzZXQgMCBpbiB0aGUgVHJpZTIgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgIC8vIDE2IGJpdCBkYXRhIGlzIHN0b3JlZCBpbiB0aGUgaW5kZXggYXJyYXkgaXRzZWxmLlxuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8yXTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVhZCBTdXJyb2dhdGUgQ29kZSBQb2ludC4gIEEgU2VwYXJhdGUgaW5kZXggc2VjdGlvbiBpcyBzdG9yZWQgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYWQgc3Vycm9nYXRlIGNvZGUgdW5pdHMgYW5kIGNvZGUgcG9pbnRzLlxuICAgICAgICAgICAgICAgICAgICAvLyAgIFRoZSBtYWluIGluZGV4IGhhcyB0aGUgY29kZSB1bml0IGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgRm9yIHRoaXMgZnVuY3Rpb24sIHdlIG5lZWQgdGhlIGNvZGUgcG9pbnQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdGhpcyBleHByZXNzaW9uIGNvdWxkIGJlIHJlZmFjdG9yZWQgZm9yIHNsaWdodGx5IGltcHJvdmVkIGVmZmljaWVuY3ksIGJ1dFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdXJyb2dhdGUgY29kZSBwb2ludHMgd2lsbCBiZSBzbyByYXJlIGluIHByYWN0aWNlIHRoYXQgaXQncyBub3Qgd29ydGggaXQuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCArIChjb2RlUG9pbnQgLSAweGQ4MDAgPj4gVVRSSUUyX1NISUZUXzIpXTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8IHRoaXMuaGlnaFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBsZW1lbnRhbCBjb2RlIHBvaW50LCB1c2UgdHdvLWxldmVsIGxvb2t1cC5cbiAgICAgICAgICAgICAgICAgICAgaXggPSBVVFJJRTJfSU5ERVhfMV9PRkZTRVQgLSBVVFJJRTJfT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEggKyAoY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8xKTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2l4XTtcbiAgICAgICAgICAgICAgICAgICAgaXggKz0gY29kZVBvaW50ID4+IFVUUklFMl9TSElGVF8yICYgVVRSSUUyX0lOREVYXzJfTUFTSztcbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W2l4XTtcbiAgICAgICAgICAgICAgICAgICAgaXggPSAoaXggPDwgVVRSSUUyX0lOREVYX1NISUZUKSArIChjb2RlUG9pbnQgJiBVVFJJRTJfREFUQV9NQVNLKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHgxMGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmhpZ2hWYWx1ZUluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZhbGwgdGhyb3VnaC4gIFRoZSBjb2RlIHBvaW50IGlzIG91dHNpZGUgb2YgdGhlIGxlZ2FsIHJhbmdlIG9mIDAuLjB4MTBmZmZmLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUcmllO1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHRvQ29kZVBvaW50cyA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gZnVuY3Rpb24gdG9Db2RlUG9pbnRzKHN0cikge1xuICAgIHZhciBjb2RlUG9pbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICAgIGlmICh2YWx1ZSA+PSAweGQ4MDAgJiYgdmFsdWUgPD0gMHhkYmZmICYmIGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBleHRyYSA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICAgICAgICBpZiAoKGV4dHJhICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKCgodmFsdWUgJiAweDNmZikgPDwgMTApICsgKGV4dHJhICYgMHgzZmYpICsgMHgxMDAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29kZVBvaW50cztcbn07XG5cbnZhciBmcm9tQ29kZVBvaW50ID0gZXhwb3J0cy5mcm9tQ29kZVBvaW50ID0gZnVuY3Rpb24gZnJvbUNvZGVQb2ludCgpIHtcbiAgICBpZiAoU3RyaW5nLmZyb21Db2RlUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50LmFwcGx5KFN0cmluZywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuXG4gICAgdmFyIGluZGV4ID0gLTE7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb2RlUG9pbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKChjb2RlUG9pbnQgPj4gMTApICsgMHhkODAwLCBjb2RlUG9pbnQgJSAweDQwMCArIDB4ZGMwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiAweDQwMDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVVuaXRzKTtcbiAgICAgICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbi8vIFVzZSBhIGxvb2t1cCB0YWJsZSB0byBmaW5kIHRoZSBpbmRleC5cbnZhciBsb29rdXAgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbn1cblxudmFyIGRlY29kZSA9IGV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICAgICAgbGVuID0gYmFzZTY0Lmxlbmd0aCxcbiAgICAgICAgaSA9IHZvaWQgMCxcbiAgICAgICAgcCA9IDAsXG4gICAgICAgIGVuY29kZWQxID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkMiA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDMgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQ0ID0gdm9pZCAwO1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlICE9PSAndW5kZWZpbmVkJyA/IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpIDogbmV3IEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgdmFyIGJ5dGVzID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gYnVmZmVyIDogbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGVuY29kZWQyID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAyKV07XG4gICAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAzKV07XG5cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbnZhciBwb2x5VWludDE2QXJyYXkgPSBleHBvcnRzLnBvbHlVaW50MTZBcnJheSA9IGZ1bmN0aW9uIHBvbHlVaW50MTZBcnJheShidWZmZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGVuZ3RoOyBfaSArPSAyKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYnVmZmVyW19pICsgMV0gPDwgOCB8IGJ1ZmZlcltfaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59O1xuXG52YXIgcG9seVVpbnQzMkFycmF5ID0gZXhwb3J0cy5wb2x5VWludDMyQXJyYXkgPSBmdW5jdGlvbiBwb2x5VWludDMyQXJyYXkoYnVmZmVyKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbGVuZ3RoOyBfaTIgKz0gNCkge1xuICAgICAgICBieXRlcy5wdXNoKGJ1ZmZlcltfaTIgKyAzXSA8PCAyNCB8IGJ1ZmZlcltfaTIgKyAyXSA8PCAxNiB8IGJ1ZmZlcltfaTIgKyAxXSA8PCA4IHwgYnVmZmVyW19pMl0pO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndG9Db2RlUG9pbnRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1V0aWwudG9Db2RlUG9pbnRzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZnJvbUNvZGVQb2ludCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9VdGlsLmZyb21Db2RlUG9pbnQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpbmVCcmVhayA9IHJlcXVpcmUoJy4vTGluZUJyZWFrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluZUJyZWFrZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTGluZUJyZWFrLkxpbmVCcmVha2VyO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ0t3QUFBQUFBQUFBQUNBNEFJRG9BQVBBZkFBQUNBQUFBQUFBSUFCQUFHQUJBQUVnQVVBQllBRjRBWmdCZUFHWUFZQUJvQUhBQWVBQmVBR1lBZkFDRUFJQUFpQUNRQUpnQW9BQ29BSzBBdFFDOUFNVUFYZ0JtQUY0QVpnQmVBR1lBelFEVkFGNEFaZ0RSQU5rQTNnRG1BT3dBOUFEOEFBUUJEQUVVQVJvQklnR0FBSWdBSndFdkFUY0JQd0ZGQVUwQlRBRlVBVndCWkFGc0FYTUJld0dEQVRBQWl3R1RBWnNCb2dHa0Fhd0J0QUc4QWNJQnlnSFNBZG9CNEFIb0FmQUIrQUgrQVFZQ0RnSVdBdjRCSGdJbUFpNENOZ0krQWtVQ1RRSlRBbHNDWXdKckFuRUNlUUtCQWswQ2lRS1JBcGtDb1FLb0FyQUN1QUxBQXNRQ3pBSXdBTlFDM0FMa0FqQUE3QUwwQXZ3Q0FRTUpBeEFER0FNd0FDQURKZ011QXpZRFBnT0FBRVlEU2dOU0ExSURVZ05hQTFvRFlBTmlBMklEZ0FDQUFHb0RnQUJ5QTNZRGZnT0FBSVFEZ0FDS0E1SURtZ09BQUlBQW9nT3FBNEFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSzhEdHdPQUFJQUF2d1BIQTg4RDF3UGZBeUFENXdQc0EvUUQvQU9BQUlBQUJBUU1CQklFZ0FBV0JCNEVKZ1F1QkRNRUlBTTdCRUVFWGdCSkJDQURVUVJaQkdFRWFRUXdBREFBY1FRK0FYa0VnUVNKQkpFRWdBQ1lCSUFBb0FTb0JLOEV0d1F3QUw4RXhRU0FBSUFBZ0FDQUFJQUFnQUNnQU0wRVhnQmVBRjRBWGdCZUFGNEFYZ0JlQU5VRVhnRFpCT0VFWGdEcEJQRUUrUVFCQlFrRkVRVVpCU0VGS1FVeEJUVUZQUVZGQlV3RlZBVmNCVjRBWXdWZUFHc0Zjd1Y3QllNRml3V1NCVjRBbWdXZ0JhY0ZYZ0JlQUY0QVhnQmVBS3NGWGdDeUJiRUZ1Z1c3QmNJRndnWElCY0lGd2dYUUJkUUYzQVhrQmVzRjh3WDdCUU1HQ3dZVEJoc0dJd1lyQmpNR093WmVBRDhHUndaTkJsNEFWQVpiQmw0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBR01HWGdCcUJuRUdYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0I1Qm9BRzR3U0dCbzRHa3dhQUFJQURIZ1I1QUY0QVhnQmVBSnNHZ0FCR0E0QUFvd2FyQnJNR3N3YWdBTHNHd3diTEJqQUEwd2JhQnRvRzNRYmFCdG9HMmdiYUJ0b0cyZ2JsQnVzRzh3YjdCZ01IQ3djVEJ4c0hDd2NqQnlzSE1BYzFCelVIT2dkQ0I5b0dTZ2RTQjFvSFlBZmFCbG9IYUFmYUJsSUgyZ2JhQnRvRzJnYmFCdG9HMmdiYUJqVUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIYlFkZUFGNEFOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkMUIzMEhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUI0TUgyZ2FLQjY4RWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUk4SGx3ZGVBSjhIcHdlQUFJQUFyd2UzQjE0QVhnQy9COFVIeWdjd0FOQUgyQWZnQjRBQTZBZndCejRCK0FjQUNGd0JDQWdQQ0JjSW9nRVlBUjhJSndpQUFDOElOd2cvQ0NBRFJ3aFBDRmNJWHdobkNFb0RHZ1NBQUlBQWdBQnZDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWhBaUxDSTRJTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUpZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdnd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjU0SU5RYzFCNklJMmdhcUNMSUl1Z2lBQUlBQXZnakdDSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBeXdpSEFZQUEwd2lBQU5rSTNRamxDTzBJOUFqOENJQUFnQUNBQUFJSkNna1NDUm9KSWdrbkNUWUhMd2szQ1pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpQUFJQUFBQUZBQVhnQmVBR0FBY0FCZUFId0FRQUNRQUtBQXJRQzlBSjRBWGdCZUFFMEEzZ0JSQU40QTdBRDhBTXdCR2dFQUFLY0JOd0VGQVV3QlhBRjRRa2hDbUVLbkFyY0NnQUhIQXNBQno0TEFBY0FCd0FIQUFkK0M2QUJvQUcrQy80TEFBY0FCd0FIQUFjK0RGNE1BQWNBQjU0TTNnd2VEVjRObmczZURhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUVlRHFBQlZnNldEcUFCb1E2Z0FhQUJvQUhYRHZjT053LzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0RuY1BBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCN2NQUHdsR0NVNEpNQUNBQUlBQWdBQldDVjRKWVFtQUFHa0pjQWw0Q1h3SmdBa3dBREFBTUFBd0FJZ0pnQUNMQ1pNSmdBQ1pDWjhKb3dtckNZQUFzd2t3QUY0QVhnQjhBSUFBdXdrQUJNTUp5UW1BQU00SmdBRFZDVEFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFxd1lXQk5rSU1BQXdBREFBTUFEZENlQUo2QW51Q1I0RTlna3dBUDRKQlFvTkNqQUFNQUNBQUJVSzB3aUFBQjBLSkFvc0NqUUtnQUF3QUR3S1F3cUFBRXNLdlFtZENWTUtXd293QURBQWdBQ0FBTGNFTUFDQUFHTUtnQUJyQ2pBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQWVCREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJa0VQUUZ6Q25vS2lRU0NDb29La0FxSkJKZ0tvQXFrQ29rRUdBR3NDclFLdkFyQkNqQUFNQURKQ3RFS0ZRSFpDdUVLL2dIcEN2RUtNQUF3QURBQU1BQ0FBSXdFK1Fvd0FJQUFQd0VCQ3pBQU1BQXdBREFBTUFDQUFBa0xFUXN3QUlBQVB3RVpDeUVMZ0FBT0NDa0xNQUF4Q3prTE1BQXdBREFBTUFBd0FEQUFYZ0JlQUVFTE1BQXdBREFBTUFBd0FEQUFNQUF3QUVrTFRRdFZDNEFBWEF0a0M0QUFpUWt3QURBQU1BQXdBREFBTUFBd0FEQUFiQXR4QzNrTGdBdUZDNHNMTUFBd0FKTUxsd3VmQ3pBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBcHdzd0FEQUFNQUNBQUlBQWdBQ3ZDNEFBZ0FDQUFJQUFnQUNBQUxjTE1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBdnd1QUFNY0xnQUNBQUlBQWdBQ0FBSUFBeWd1QUFJQUFnQUNBQUlBQTBRc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBTmtMZ0FDQUFJQUE0QXN3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0pDUjRFNkFzd0FEQUFod0h3QzRBQStBc0FEQWdNRUF3d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFDQUFJQUFHQXdkRENVTU1BQXdBQzBNTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlF3MUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSFBRd3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEVUhOUWMxQnpVSE5RYzFCelVITlFjMkJ6QUFNQUE1RERVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RZEZEREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQVRReFNERm9NTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRjRBWGdCZUFGNEFYZ0JlQUY0QVlneGVBR29NWGdCeERIa01md3hlQUlVTVhnQmVBSTBNTUFBd0FEQUFNQUF3QUY0QVhnQ1ZESjBNTUFBd0FEQUFNQUJlQUY0QXBReGVBS3NNc3d5N0RGNEF3Z3k5RE1vTVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnRFJETmtNZVFCcUNlQU0zQXg4QU9ZTTdBejBEUGdNWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQ2dBQUFOb0FBSERRNE5GZzB3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBZURTWU5NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBQzROTUFCZUFGNEFOZzB3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUQ0TlJnMU9EVllOWGcxbURUQUFiUTB3QURBQU1BQXdBREFBTUFBd0FEQUEyZ2JhQnRvRzJnYmFCdG9HMmdiYUJuVU5lZzNDQllBTndnV0ZEZG9HakEzYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2FVRFp3TnBBMm9EZG9HMmdhd0RiY052dzNIRGRvRzJnYlBEZFlOM0EzZkRlWU4yZ2JzRGZNTjJnYmFCdm9OL2czYUJnWU9EZzdhQmw0QVhnQmVBQllPWGdCZUFDVUcyZ1llRGw0QUpBNWVBQ3dPMnczYUJ0b0dNUTQ1RHRvRzJnYmFCdG9HUVE3YUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ1pKRGpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjFFTzJnWTFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkWkRqVUhOUWMxQnpVSE5RYzFCMkVPTlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIYUE0MUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjNBTzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWTFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjJFTzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWkpEdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCa2tPZUE2Z0FLQUFvQUF3QURBQU1BQXdBS0FBb0FDZ0FLQUFvQUNnQUtBQWdBNHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFELy93UUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFBd0FCQUFFQUFnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUtBQk1BRndBZUFCc0FHZ0FlQUJjQUZnQVNBQjRBR3dBWUFBOEFHQUFjQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUdBQVlBQjRBSGdBZUFCTUFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFGZ0FiQUJJQUhnQWVBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQllBRFFBUkFCNEFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBVUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBa0FGZ0FhQUJzQUd3QWJBQjRBSFFBZEFCNEFUd0FYQUI0QURRQWVBQjRBR2dBYkFFOEFUd0FPQUZBQUhRQWRBQjBBVHdCUEFCY0FUd0JQQUU4QUZnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBVUFCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBRkFBVHdCQUFFOEFUd0JQQUVBQVR3QlFBRkFBVHdCUUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIZ0FkQUI0QURnQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUpBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBa0FDUUFKQUFrQUNRQUpBQWtBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBRkFBSGdBZUFCNEFLd0FyQUZBQVVBQlFBRkFBR0FCUUFDc0FLd0FyQUNzQUhnQWVBRkFBSGdCUUFGQUFVQUFyQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBWUFBMEFLd0FyQUI0QUhnQWJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFCNEFCQUFFQUI0QUJBQUVBQk1BQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBS3dBckFDc0FLd0FyQUZZQVZnQldBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFHZ0FhQUJvQUdBQVlBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFFd0FFQUNzQUV3QVRBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFCb0FHUUFaQUI0QVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJNQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUJRQUZBQUJBQUVBQjRBQkFBRUFBUUFCQUJRQUZBQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFBZUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFGQUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBQjRBSGdBWUFCTUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQXJBQ3NBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0FyQUNzQVVBQlFBRkFBVUFBckFDc0FCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUFRQUJBQXJBQ3NBQkFBRUFBUUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFyQUNzQUt3QXJBRkFBVUFBckFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFHZ0FhQUZBQVVBQlFBRkFBVUFCTUFCNEFHd0JRQUI0QUt3QXJBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBVUFBckFGQUFVQUFyQUNzQUJBQXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQUt3QXJBQ3NBQkFBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FFQUFRQVVBQlFBRkFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFVQUJRQUZBQVVBQXJBQ3NBQkFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBS3dBckFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBQnNBS3dBckFDc0FLd0FyQUNzQUt3QlFBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBQ3NBS3dBckFGQUFVQUFyQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QlFBRkFBVUFBckFGQUFVQUJRQUZBQUt3QXJBQ3NBVUFCUUFDc0FVQUFyQUZBQVVBQXJBQ3NBS3dCUUFGQUFLd0FyQUNzQVVBQlFBRkFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQ3NBS3dCUUFDc0FLd0FyQUNzQUt3QXJBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCc0FIZ0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQXJBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFCNEFVQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBQ3NBS3dBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBRkFBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQlFBQjRBS3dBckFDc0FLd0JRQUZBQVVBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJvQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFLd0FFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUFRQUJBQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXFBQ3NBS3dBckFDc0FHd0JjQUZ3QVhBQmNBRndBWEFCY0FDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBZUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FEUUFOQUNzQUt3QXJBQ3NBS3dCY0FGd0FLd0JjQUNzQUt3QmNBRndBS3dCY0FDc0FLd0JjQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QUt3QmNBRndBWEFCY0FGd0FYQUJjQUNzQVhBQmNBRndBS3dCY0FDc0FYQUFyQUNzQVhBQmNBQ3NBWEFCY0FGd0FYQUFxQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FyQUNvQUtnQmNBQ3NBS3dCY0FGd0FYQUJjQUZ3QUt3QmNBQ3NBS2dBcUFDb0FLZ0FxQUNvQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFGd0FYQUJjQUZ3QVVBQU9BQTRBRGdBT0FCNEFEZ0FPQUFrQURnQU9BQTBBQ1FBVEFCTUFFd0FUQUJNQUNRQWVBQk1BSGdBZUFCNEFCQUFFQUI0QUhnQWVBQjRBSGdBZUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFOQUFRQUhnQUVBQjRBQkFBV0FCRUFGZ0FSQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFOQUFRQUJBQUVBQVFBQkFBTkFBUUFCQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBQVFBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBRGdBT0FBMEFEZ0FlQUI0QUhnQWVBQjRBQ1FBSkFDc0FLd0FyQUNzQUt3QmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBRndBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBTkFBMEFIZ0FlQUI0QUhnQmNBRndBWEFCY0FGd0FYQUFxQUNvQUtnQXFBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dCY0FGd0FYQUFxQUNvQUtnQXFBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQVhBQXFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS2dBcUFDb0FLZ0FxQUNvQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUZBQVVBQlFBRkFBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBRUFBUUFCQUFlQUEwQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBTkFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQllBRVFBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURRQU5BQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQTBBRFFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQURRQU5BQlVBWEFBTkFCNEFEUUFiQUZ3QUtnQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQVRBQk1BRFFBTkFBNEFIZ0FUQUJNQUhnQUVBQVFBQkFBSkFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QWVBQ3NBS3dBckFCTUFFd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNzQUt3QmNBRndBWEFCY0FGd0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBS3dBckFDc0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCY0FDc0FLd0FyQUNvQUtnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQ3NBS3dBZUFCNEFYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDc0FCQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS2dBcUFDb0FLZ0FxQUNvQUtnQmNBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBRFFBTkFCNEFEUUFOQUEwQURRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFBUUFCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FOQUEwQURRQU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0JRQUZBQVVBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFOQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBVUFCUUFGQUFCQUJRQUZBQVVBQlFBQVFBQkFBRUFGQUFVQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQVFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBQ3NBVUFBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QVVBQlFBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFBNEFIZ0FyQUEwQURRQU5BQTBBRFFBTkFBMEFDUUFOQUEwQURRQUlBQVFBQ3dBRUFBUUFEUUFKQUEwQURRQU1BQjBBSFFBZUFCY0FGd0FXQUJjQUZ3QVhBQllBRndBZEFCMEFIZ0FlQUJRQUZBQVVBQTBBQVFBQkFBUUFCQUFFQUFRQUJBQUpBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWVBQmNBRndBZEFCVUFGUUFlQUI0QUhnQWVBQjRBSGdBWUFCWUFFUUFWQUJVQUZRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBTkFCNEFEUUFOQUEwQURRQWVBQTBBRFFBTkFBY0FIZ0FlQUI0QUhnQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFDc0FLd0JQQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FXQUJFQVR3QlFBRThBVHdCUEFFOEFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCWUFFUUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FHd0FiQUJzQUd3QWJBQnNBR3dBYUFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWFBQnNBR3dBYkFCc0FHZ0FiQUJzQUdnQWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0JRQUJvQUhnQWRBQjRBVUFBZUFCb0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFUd0FlQUZBQUd3QWVBQjRBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjBBSFFBZUFGQUFIZ0JRQUI0QVVBQWVBRkFBVHdCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QVVBQlFBRkFBVUFCUEFFOEFVQUJRQUZBQVVBQlFBRThBVUFCUUFFOEFVQUJQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBRkFBVUFCUUFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUZBQVVBQlFBRkFBVHdBZUFCNEFLd0FyQUNzQUt3QWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjBBSFFBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSGdBZUFCNEFIUUFlQUIwQUd3QWJBQjRBSFFBZUFCNEFIZ0FlQUIwQUhnQWVBQjBBSFFBZEFCMEFIZ0FlQUIwQUhnQWRBQjRBSFFBZEFCMEFIUUFkQUIwQUhnQWRBQjRBSGdBZUFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZUFCNEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCMEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JRQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCMEFIUUFkQUI0QUhnQWRBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBZUFCMEFIUUFlQUI0QUhRQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQ1VBSlFBZEFCMEFKUUFlQUNVQUpRQWxBQ0FBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFIZ0FlQUI0QUhnQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUI0QUhRQWRBQjBBSGdBZEFDVUFIUUFkQUI0QUhRQWRBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSFFBZEFCMEFIUUFsQUI0QUpRQWxBQ1VBSFFBbEFDVUFIUUFkQUIwQUpRQWxBQjBBSFFBbEFCMEFIUUFsQUNVQUpRQWVBQjBBSGdBZUFCNEFIZ0FkQUIwQUpRQWRBQjBBSFFBZEFCMEFIUUFsQUNVQUpRQWxBQ1VBSFFBbEFDVUFJQUFsQUIwQUhRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSlFBbEFDQUFJQUFnQUNBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhnQWVBQmNBRndBWEFCY0FGd0FYQUI0QUV3QVRBQ1VBSGdBZUFCNEFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUFRQUJBQWVBQjRBS3dBckFDc0FLd0FyQUJNQURRQU5BQTBBVUFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFlQUEwQUZnQU5BQjRBSGdBWEFCY0FIZ0FlQUJjQUZ3QVdBQkVBRmdBUkFCWUFFUUFXQUJFQURRQU5BQTBBRFFBVEFGQUFEUUFOQUI0QURRQU5BQjRBSGdBZUFCNEFIZ0FNQUF3QURRQU5BQTBBSGdBTkFBMEFGZ0FOQUEwQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQTBBRVFBUkFDVUFKUUJIQUZjQVZ3QVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQ1VBSlFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRlFBV0FCRUFFUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUFRQUJBQUVBQVFBQkFBRUFDVUFWd0JYQUZjQVZ3QTJBQ1VBSlFCWEFGY0FWd0JIQUVjQUpRQWxBQ1VBS3dCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JSQUZjQVVRQlhBRkVBVndCWEFGY0FWd0JYQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JSQUZFQUt3QXJBQVFBQkFBVkFCVUFSd0JIQUZjQUZRQlJBRmNBVVFCWEFGRUFWd0JSQUZjQVVRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVndCWEFGY0FWd0JYQUZFQVVRQlhBRmNBVndCWEFCVUFVUUJIQUVjQVZ3QXJBQ3NBS3dBckFDc0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBckFDVUFKUUJYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFDc0FLd0FyQUNVQUpRQWxBQ1VBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFFOEFUd0JQQUU4QVR3QlBBRThBVHdBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUVjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQURRQVRBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBQkFBRUFBUUFCQUFlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBVUFCUUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFlQUEwQURRQU5BQTBBRFFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBVUFCUUFGQUFCQUJRQUZBQVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQm9BSGdBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRGdBT0FCTUFFd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FOQUEwQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0JRQUE0QVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBQ3NBS3dBckFBUUFIZ0FlQUI0QUhnQWVBQjRBRFFBTkFBMEFIZ0FlQUI0QUhnQXJBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUI0QUhnQmNBRndBWEFCY0FGd0FLZ0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVhBQmNBRndBWEFCY0FDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBSGdBTkFBMEFEUUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FYQUFxQUNvQUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBRndBS2dBcUFDb0FYQUJjQUNvQUtnQmNBRndBWEFCY0FGd0FLZ0FxQUZ3QUtnQmNBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBQ29BS2dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFBUUFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FWQUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJVQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBS3dBckFDc0FLd0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQUt3QXJBQ3NBS3dBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGWUFCQUJXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUI0QVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdBckFGWUFWZ0JXQUZZQVZnQXJBRllBS3dCV0FGWUFLd0JXQUZZQUt3QldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRVFBV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWFBQjRBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBR0FBUkFCRUFHQUFZQUJNQUV3QVdBQkVBRkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNVQUpRQWxBQ1VBSlFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFsQUNVQUZnQVJBQ1VBSlFBbEFDVUFKUUFsQUNVQUVRQWxBQkVBS3dBVkFCVUFFd0FUQUNVQUZnQVJBQllBRVFBV0FCRUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FKUUFiQUJvQUpRQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFjQUt3QVRBQ1VBSlFBYkFCb0FKUUFsQUJZQUVRQWxBQ1VBRVFBbEFCRUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJVQUZRQWxBQ1VBSlFBVEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFCWUFKUUFSQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QVdBQ1VBRVFBbEFCWUFFUUFSQUJZQUVRQVJBQlVBVndCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBUndBckFDc0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QXJBQ3NBVndCWEFGY0FLd0FyQUNzQUdnQWJBQ1VBSlFBbEFCc0FHd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQVFBQjBBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBRFFBTkFBMEFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQlFBRkFBVUFCUUFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQUt3QXJBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQURRQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0FFQUFRQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUFRQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUJBQUVBQVFBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FEUUFOQUEwQURRQU5BQTBBRFFBTkFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUEwQURRQU5BQTBBRFFBTkFCUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBTkFBMEFEUUFOQUEwQURRQU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBZUFBNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUZBQVVBQlFBRkFBRFFBTkFCNEFEUUFlQUFRQUJBQUVBQjRBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUFPQUZBQURRQU5BQTBBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFOQUEwQUhnQU5BQTBBSGdBRUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUNzQUt3QUVBQVFBQkFBckFDc0FVQUFyQUNzQUt3QXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFIZ0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQURRQXJBQjRBS3dBckFBUUFCQUFFQUFRQVVBQlFBQjRBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFPQUEwQURRQVRBQk1BSGdBZUFCNEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBVUFCUUFGQUFVQUFFQUFRQUt3QXJBQVFBRFFBTkFCNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFyQUNzQUt3QXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FBMEFEUUFOQUNvQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFPQUI0QURRQU5BQTBBRFFBT0FCNEFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQU5BQ3NBRGdBT0FBNEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FPQUJNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QUVBQ3NBQkFBRUFDc0FCQUFFQUFRQUJBQUVBQVFBQkFCUUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FEUUFOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFTQUJJQUVnQVF3QkRBRU1BVUFCUUFGQUFVQUJEQUZBQVVBQlFBRWdBUXdCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFTQUJEQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQklBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FOQUEwQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQURRQU5BQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBRFFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUVjQVJ3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBZUFBUUFCQUFOQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FFQUFRQUJBQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFBckFDc0FVQUFyQUNzQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBZUFCNEFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBZUFCNEFEUUFOQUEwQURRQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUZnQVdBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQXJBRkFBS3dBckFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFGQUFLd0JRQUNzQUt3QXJBQ3NBS3dBckFGQUFLd0FyQUNzQUt3QlFBQ3NBVUFBckFGQUFLd0JRQUZBQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQUt3QlFBQ3NBVUFBckFGQUFLd0JRQUNzQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWxBQ1VBSlFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZUFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUNVQUpRQWxBQ1VBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFDVUFKUUFsQUNVQUpRQWVBQ1VBSlFBbEFDVUFKUUFnQUNBQUlBQWxBQ1VBSUFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSVFBaEFDRUFJUUFoQUNVQUpRQWdBQ0FBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUlBQWxBQ1VBSlFBbEFDQUFKUUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFsQUNVQUpRQWdBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWdBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQ1VBSGdBbEFCNEFKUUFsQUNVQUpRQWxBQ0FBSlFBbEFDVUFKUUFlQUNVQUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUlBQWdBQ0FBSUFBZ0FCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZ3QVhBQmNBRlFBVkFCVUFIZ0FlQUI0QUhnQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBbEFDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFKUUFsQUNVQUlBQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBJzsiLCIvL2Rvd25sb2FkLmpzIHY0LjIsIGJ5IGRhbmRhdmlzOyAyMDA4LTIwMTYuIFtNSVRdIHNlZSBodHRwOi8vZGFubWwuY29tL2Rvd25sb2FkLmh0bWwgZm9yIHRlc3RzL3VzYWdlXG4vLyB2MSBsYW5kZWQgYSBGRitDaHJvbWUgY29tcGF0IHdheSBvZiBkb3dubG9hZGluZyBzdHJpbmdzIHRvIGxvY2FsIHVuLW5hbWVkIGZpbGVzLCB1cGdyYWRlZCB0byB1c2UgYSBoaWRkZW4gZnJhbWUgYW5kIG9wdGlvbmFsIG1pbWVcbi8vIHYyIGFkZGVkIG5hbWVkIGZpbGVzIHZpYSBhW2Rvd25sb2FkXSwgbXNTYXZlQmxvYiwgSUUgKDEwKykgc3VwcG9ydCwgYW5kIHdpbmRvdy5VUkwgc3VwcG9ydCBmb3IgbGFyZ2VyK2Zhc3RlciBzYXZlcyB0aGFuIGRhdGFVUkxzXG4vLyB2MyBhZGRlZCBkYXRhVVJMIGFuZCBCbG9iIElucHV0LCBiaW5kLXRvZ2dsZSBhcml0eSwgYW5kIGxlZ2FjeSBkYXRhVVJMIGZhbGxiYWNrIHdhcyBpbXByb3ZlZCB3aXRoIGZvcmNlLWRvd25sb2FkIG1pbWUgYW5kIGJhc2U2NCBzdXBwb3J0LiAzLjEgaW1wcm92ZWQgc2FmYXJpIGhhbmRsaW5nLlxuLy8gdjQgYWRkcyBBTUQvVU1ELCBjb21tb25KUywgYW5kIHBsYWluIGJyb3dzZXIgc3VwcG9ydFxuLy8gdjQuMSBhZGRzIHVybCBkb3dubG9hZCBjYXBhYmlsaXR5IHZpYSBzb2xvIFVSTCBhcmd1bWVudCAoc2FtZSBkb21haW4vQ09SUyBvbmx5KVxuLy8gdjQuMiBhZGRzIHNlbWFudGljIHZhcmlhYmxlIG5hbWVzLCBsb25nIChvdmVyIDJNQikgZGF0YVVSTCBzdXBwb3J0LCBhbmQgaGlkZGVuIGJ5IGRlZmF1bHQgdGVtcCBhbmNob3JzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcm5kbWUvZG93bmxvYWRcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcblx0XHQvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcblx0XHQvLyBsaWtlIE5vZGUuXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcblx0XHRyb290LmRvd25sb2FkID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZG93bmxvYWQoZGF0YSwgc3RyRmlsZU5hbWUsIHN0ck1pbWVUeXBlKSB7XG5cblx0XHR2YXIgc2VsZiA9IHdpbmRvdywgLy8gdGhpcyBzY3JpcHQgaXMgb25seSBmb3IgYnJvd3NlcnMgYW55d2F5Li4uXG5cdFx0XHRkZWZhdWx0TWltZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIC8vIHRoaXMgZGVmYXVsdCBtaW1lIGFsc28gdHJpZ2dlcnMgaWZyYW1lIGRvd25sb2Fkc1xuXHRcdFx0bWltZVR5cGUgPSBzdHJNaW1lVHlwZSB8fCBkZWZhdWx0TWltZSxcblx0XHRcdHBheWxvYWQgPSBkYXRhLFxuXHRcdFx0dXJsID0gIXN0ckZpbGVOYW1lICYmICFzdHJNaW1lVHlwZSAmJiBwYXlsb2FkLFxuXHRcdFx0YW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXG5cdFx0XHR0b1N0cmluZyA9IGZ1bmN0aW9uKGEpe3JldHVybiBTdHJpbmcoYSk7fSxcblx0XHRcdG15QmxvYiA9IChzZWxmLkJsb2IgfHwgc2VsZi5Nb3pCbG9iIHx8IHNlbGYuV2ViS2l0QmxvYiB8fCB0b1N0cmluZyksXG5cdFx0XHRmaWxlTmFtZSA9IHN0ckZpbGVOYW1lIHx8IFwiZG93bmxvYWRcIixcblx0XHRcdGJsb2IsXG5cdFx0XHRyZWFkZXI7XG5cdFx0XHRteUJsb2I9IG15QmxvYi5jYWxsID8gbXlCbG9iLmJpbmQoc2VsZikgOiBCbG9iIDtcblx0ICBcblx0XHRpZihTdHJpbmcodGhpcyk9PT1cInRydWVcIil7IC8vcmV2ZXJzZSBhcmd1bWVudHMsIGFsbG93aW5nIGRvd25sb2FkLmJpbmQodHJ1ZSwgXCJ0ZXh0L3htbFwiLCBcImV4cG9ydC54bWxcIikgdG8gYWN0IGFzIGEgY2FsbGJhY2tcblx0XHRcdHBheWxvYWQ9W3BheWxvYWQsIG1pbWVUeXBlXTtcblx0XHRcdG1pbWVUeXBlPXBheWxvYWRbMF07XG5cdFx0XHRwYXlsb2FkPXBheWxvYWRbMV07XG5cdFx0fVxuXG5cblx0XHRpZih1cmwgJiYgdXJsLmxlbmd0aDwgMjA0OCl7IC8vIGlmIG5vIGZpbGVuYW1lIGFuZCBubyBtaW1lLCBhc3N1bWUgYSB1cmwgd2FzIHBhc3NlZCBhcyB0aGUgb25seSBhcmd1bWVudFxuXHRcdFx0ZmlsZU5hbWUgPSB1cmwuc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXTtcblx0XHRcdGFuY2hvci5ocmVmID0gdXJsOyAvLyBhc3NpZ24gaHJlZiBwcm9wIHRvIHRlbXAgYW5jaG9yXG5cdFx0ICBcdGlmKGFuY2hvci5ocmVmLmluZGV4T2YodXJsKSAhPT0gLTEpeyAvLyBpZiB0aGUgYnJvd3NlciBkZXRlcm1pbmVzIHRoYXQgaXQncyBhIHBvdGVudGlhbGx5IHZhbGlkIHVybCBwYXRoOlxuICAgICAgICBcdFx0dmFyIGFqYXg9bmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIFx0XHRhamF4Lm9wZW4oIFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIFx0XHRhamF4LnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgXHRcdGFqYXgub25sb2FkPSBmdW5jdGlvbihlKXsgXG5cdFx0XHRcdCAgZG93bmxvYWQoZS50YXJnZXQucmVzcG9uc2UsIGZpbGVOYW1lLCBkZWZhdWx0TWltZSk7XG5cdFx0XHRcdH07XG4gICAgICAgIFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGFqYXguc2VuZCgpO30sIDApOyAvLyBhbGxvd3Mgc2V0dGluZyBjdXN0b20gYWpheCBoZWFkZXJzIHVzaW5nIHRoZSByZXR1cm46XG5cdFx0XHQgICAgcmV0dXJuIGFqYXg7XG5cdFx0XHR9IC8vIGVuZCBpZiB2YWxpZCB1cmw/XG5cdFx0fSAvLyBlbmQgaWYgdXJsP1xuXG5cblx0XHQvL2dvIGFoZWFkIGFuZCBkb3dubG9hZCBkYXRhVVJMcyByaWdodCBhd2F5XG5cdFx0aWYoL15kYXRhOihbXFx3Ky1dK1xcL1tcXHcrLi1dKyk/Wyw7XS8udGVzdChwYXlsb2FkKSl7XG5cdFx0XG5cdFx0XHRpZihwYXlsb2FkLmxlbmd0aCA+ICgxMDI0KjEwMjQqMS45OTkpICYmIG15QmxvYiAhPT0gdG9TdHJpbmcgKXtcblx0XHRcdFx0cGF5bG9hZD1kYXRhVXJsVG9CbG9iKHBheWxvYWQpO1xuXHRcdFx0XHRtaW1lVHlwZT1wYXlsb2FkLnR5cGUgfHwgZGVmYXVsdE1pbWU7XG5cdFx0XHR9ZWxzZXtcdFx0XHRcblx0XHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iID8gIC8vIElFMTAgY2FuJ3QgZG8gYVtkb3dubG9hZF0sIG9ubHkgQmxvYnM6XG5cdFx0XHRcdFx0bmF2aWdhdG9yLm1zU2F2ZUJsb2IoZGF0YVVybFRvQmxvYihwYXlsb2FkKSwgZmlsZU5hbWUpIDpcblx0XHRcdFx0XHRzYXZlcihwYXlsb2FkKSA7IC8vIGV2ZXJ5b25lIGVsc2UgY2FuIHNhdmUgZGF0YVVSTHMgdW4tcHJvY2Vzc2VkXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9ZWxzZXsvL25vdCBkYXRhIHVybCwgaXMgaXQgYSBzdHJpbmcgd2l0aCBzcGVjaWFsIG5lZWRzP1xuXHRcdFx0aWYoLyhbXFx4ODAtXFx4ZmZdKS8udGVzdChwYXlsb2FkKSl7XHRcdFx0ICBcblx0XHRcdFx0dmFyIGk9MCwgdGVtcFVpQXJyPSBuZXcgVWludDhBcnJheShwYXlsb2FkLmxlbmd0aCksIG14PXRlbXBVaUFyci5sZW5ndGg7XG5cdFx0XHRcdGZvcihpO2k8bXg7KytpKSB0ZW1wVWlBcnJbaV09IHBheWxvYWQuY2hhckNvZGVBdChpKTtcblx0XHRcdCBcdHBheWxvYWQ9bmV3IG15QmxvYihbdGVtcFVpQXJyXSwge3R5cGU6IG1pbWVUeXBlfSk7XG5cdFx0XHR9XHRcdCAgXG5cdFx0fVxuXHRcdGJsb2IgPSBwYXlsb2FkIGluc3RhbmNlb2YgbXlCbG9iID9cblx0XHRcdHBheWxvYWQgOlxuXHRcdFx0bmV3IG15QmxvYihbcGF5bG9hZF0sIHt0eXBlOiBtaW1lVHlwZX0pIDtcblxuXG5cdFx0ZnVuY3Rpb24gZGF0YVVybFRvQmxvYihzdHJVcmwpIHtcblx0XHRcdHZhciBwYXJ0cz0gc3RyVXJsLnNwbGl0KC9bOjssXS8pLFxuXHRcdFx0dHlwZT0gcGFydHNbMV0sXG5cdFx0XHRkZWNvZGVyPSBwYXJ0c1syXSA9PSBcImJhc2U2NFwiID8gYXRvYiA6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0XHRcdGJpbkRhdGE9IGRlY29kZXIoIHBhcnRzLnBvcCgpICksXG5cdFx0XHRteD0gYmluRGF0YS5sZW5ndGgsXG5cdFx0XHRpPSAwLFxuXHRcdFx0dWlBcnI9IG5ldyBVaW50OEFycmF5KG14KTtcblxuXHRcdFx0Zm9yKGk7aTxteDsrK2kpIHVpQXJyW2ldPSBiaW5EYXRhLmNoYXJDb2RlQXQoaSk7XG5cblx0XHRcdHJldHVybiBuZXcgbXlCbG9iKFt1aUFycl0sIHt0eXBlOiB0eXBlfSk7XG5cdFx0IH1cblxuXHRcdGZ1bmN0aW9uIHNhdmVyKHVybCwgd2luTW9kZSl7XG5cblx0XHRcdGlmICgnZG93bmxvYWQnIGluIGFuY2hvcikgeyAvL2h0bWw1IEFbZG93bmxvYWRdXG5cdFx0XHRcdGFuY2hvci5ocmVmID0gdXJsO1xuXHRcdFx0XHRhbmNob3Iuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXHRcdFx0XHRhbmNob3IuY2xhc3NOYW1lID0gXCJkb3dubG9hZC1qcy1saW5rXCI7XG5cdFx0XHRcdGFuY2hvci5pbm5lckhUTUwgPSBcImRvd25sb2FkaW5nLi4uXCI7XG5cdFx0XHRcdGFuY2hvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRhbmNob3IuY2xpY2soKTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XG5cdFx0XHRcdFx0aWYod2luTW9kZT09PXRydWUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXsgc2VsZi5VUkwucmV2b2tlT2JqZWN0VVJMKGFuY2hvci5ocmVmKTt9LCAyNTAgKTt9XG5cdFx0XHRcdH0sIDY2KTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGhhbmRsZSBub24tYVtkb3dubG9hZF0gc2FmYXJpIGFzIGJlc3Qgd2UgY2FuOlxuXHRcdFx0aWYoLyhWZXJzaW9uKVxcLyhcXGQrKVxcLihcXGQrKSg/OlxcLihcXGQrKSk/LipTYWZhcmlcXC8vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdFx0aWYoL15kYXRhOi8udGVzdCh1cmwpKVx0dXJsPVwiZGF0YTpcIit1cmwucmVwbGFjZSgvXmRhdGE6KFtcXHdcXC9cXC1cXCtdKykvLCBkZWZhdWx0TWltZSk7XG5cdFx0XHRcdGlmKCF3aW5kb3cub3Blbih1cmwpKXsgLy8gcG9wdXAgYmxvY2tlZCwgb2ZmZXIgZGlyZWN0IGRvd25sb2FkOlxuXHRcdFx0XHRcdGlmKGNvbmZpcm0oXCJEaXNwbGF5aW5nIE5ldyBEb2N1bWVudFxcblxcblVzZSBTYXZlIEFzLi4uIHRvIGRvd25sb2FkLCB0aGVuIGNsaWNrIGJhY2sgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZS5cIikpeyBsb2NhdGlvbi5ocmVmPXVybDsgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2RvIGlmcmFtZSBkYXRhVVJMIGRvd25sb2FkIChvbGQgY2grRkYpOlxuXHRcdFx0dmFyIGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcblxuXHRcdFx0aWYoIXdpbk1vZGUgJiYgL15kYXRhOi8udGVzdCh1cmwpKXsgLy8gZm9yY2UgYSBtaW1lIHRoYXQgd2lsbCBkb3dubG9hZDpcblx0XHRcdFx0dXJsPVwiZGF0YTpcIit1cmwucmVwbGFjZSgvXmRhdGE6KFtcXHdcXC9cXC1cXCtdKykvLCBkZWZhdWx0TWltZSk7XG5cdFx0XHR9XG5cdFx0XHRmLnNyYz11cmw7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZik7IH0sIDMzMyk7XG5cblx0XHR9Ly9lbmQgc2F2ZXJcblxuXG5cblxuXHRcdGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRTEwKyA6IChoYXMgQmxvYiwgYnV0IG5vdCBhW2Rvd25sb2FkXSBvciBVUkwpXG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZU5hbWUpO1xuXHRcdH1cblxuXHRcdGlmKHNlbGYuVVJMKXsgLy8gc2ltcGxlIGZhc3QgYW5kIG1vZGVybiB3YXkgdXNpbmcgQmxvYiBhbmQgVVJMOlxuXHRcdFx0c2F2ZXIoc2VsZi5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLCB0cnVlKTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vIGhhbmRsZSBub24tQmxvYigpK25vbi1VUkwgYnJvd3NlcnM6XG5cdFx0XHRpZih0eXBlb2YgYmxvYiA9PT0gXCJzdHJpbmdcIiB8fCBibG9iLmNvbnN0cnVjdG9yPT09dG9TdHJpbmcgKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdHJldHVybiBzYXZlciggXCJkYXRhOlwiICsgIG1pbWVUeXBlICAgKyBcIjtiYXNlNjQsXCIgICsgIHNlbGYuYnRvYShibG9iKSAgKTtcblx0XHRcdFx0fWNhdGNoKHkpe1xuXHRcdFx0XHRcdHJldHVybiBzYXZlciggXCJkYXRhOlwiICsgIG1pbWVUeXBlICAgKyBcIixcIiArIGVuY29kZVVSSUNvbXBvbmVudChibG9iKSAgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBCbG9iIGJ1dCBub3QgVVJMIHN1cHBvcnQ6XG5cdFx0XHRyZWFkZXI9bmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdHJlYWRlci5vbmxvYWQ9ZnVuY3Rpb24oZSl7XG5cdFx0XHRcdHNhdmVyKHRoaXMucmVzdWx0KTtcblx0XHRcdH07XG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07IC8qIGVuZCBkb3dubG9hZCgpICovXG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBTkdMRSA9IC8oWystXT9cXGQqXFwuP1xcZCspKGRlZ3xncmFkfHJhZHx0dXJuKS9pO1xuXG52YXIgcGFyc2VBbmdsZSA9IGV4cG9ydHMucGFyc2VBbmdsZSA9IGZ1bmN0aW9uIHBhcnNlQW5nbGUoYW5nbGUpIHtcbiAgICB2YXIgbWF0Y2ggPSBhbmdsZS5tYXRjaChBTkdMRSk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMl0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnZGVnJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHZhbHVlIC8gMTgwO1xuICAgICAgICAgICAgY2FzZSAnZ3JhZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAyMDAgKiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgY2FzZSAndHVybic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiAyICogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm91bmRDdXJ2ZXMgPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGhGb3JCb3JkZXIgPSBleHBvcnRzLnBhcnNlRG9jdW1lbnRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVDb250ZW50Qm94ID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94ID0gZXhwb3J0cy5wYXJzZUJvdW5kcyA9IGV4cG9ydHMuQm91bmRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4vZHJhd2luZy9WZWN0b3InKTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9CZXppZXJDdXJ2ZSA9IHJlcXVpcmUoJy4vZHJhd2luZy9CZXppZXJDdXJ2ZScpO1xuXG52YXIgX0JlemllckN1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JlemllckN1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRPUCA9IDA7XG52YXIgUklHSFQgPSAxO1xudmFyIEJPVFRPTSA9IDI7XG52YXIgTEVGVCA9IDM7XG5cbnZhciBIID0gMDtcbnZhciBWID0gMTtcblxudmFyIEJvdW5kcyA9IGV4cG9ydHMuQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdW5kcyh4LCB5LCB3LCBoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3VuZHMpO1xuXG4gICAgICAgIHRoaXMubGVmdCA9IHg7XG4gICAgICAgIHRoaXMudG9wID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm91bmRzLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdmcm9tQ2xpZW50UmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmcm9tQ2xpZW50UmVjdChjbGllbnRSZWN0LCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5kcyhjbGllbnRSZWN0LmxlZnQgKyBzY3JvbGxYLCBjbGllbnRSZWN0LnRvcCArIHNjcm9sbFksIGNsaWVudFJlY3Qud2lkdGgsIGNsaWVudFJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3VuZHM7XG59KCk7XG5cbnZhciBwYXJzZUJvdW5kcyA9IGV4cG9ydHMucGFyc2VCb3VuZHMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgcmV0dXJuIEJvdW5kcy5mcm9tQ2xpZW50UmVjdChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzY3JvbGxYLCBzY3JvbGxZKTtcbn07XG5cbnZhciBjYWxjdWxhdGVQYWRkaW5nQm94ID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlUGFkZGluZ0JveChib3VuZHMsIGJvcmRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEJvdW5kcyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMuaGVpZ2h0IC0gKGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCkpO1xufTtcblxudmFyIGNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVDb250ZW50Qm94KGJvdW5kcywgcGFkZGluZywgYm9yZGVycykge1xuICAgIC8vIFRPRE8gc3VwcG9ydCBwZXJjZW50YWdlIHBhZGRpbmdzXG4gICAgdmFyIHBhZGRpbmdUb3AgPSBwYWRkaW5nW1RPUF0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHBhZGRpbmdbUklHSFRdLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tCT1RUT01dLnZhbHVlO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhZGRpbmdbTEVGVF0udmFsdWU7XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kcyhib3VuZHMubGVmdCArIHBhZGRpbmdMZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIHBhZGRpbmdUb3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCksIGJvdW5kcy5oZWlnaHQgLSAoYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20pKTtcbn07XG5cbnZhciBwYXJzZURvY3VtZW50U2l6ZSA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50U2l6ZShkb2N1bWVudCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKCFib2R5IHx8ICFkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnVW5hYmxlIHRvIGdldCBkb2N1bWVudCBzaXplJyA6ICcnKTtcbiAgICB9XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoKSwgTWF0aC5tYXgoYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoKSwgTWF0aC5tYXgoYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSk7XG5cbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpLCBNYXRoLm1heChib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCksIE1hdGgubWF4KGJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kcygwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBwYXJzZVBhdGhGb3JCb3JkZXIgPSBleHBvcnRzLnBhcnNlUGF0aEZvckJvcmRlciA9IGZ1bmN0aW9uIHBhcnNlUGF0aEZvckJvcmRlcihjdXJ2ZXMsIGJvcmRlclNpZGUpIHtcbiAgICBzd2l0Y2ggKGJvcmRlclNpZGUpIHtcbiAgICAgICAgY2FzZSBUT1A6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcExlZnRJbm5lciwgY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy50b3BSaWdodElubmVyKTtcbiAgICAgICAgY2FzZSBSSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lcik7XG4gICAgICAgIGNhc2UgQk9UVE9NOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbUxlZnRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lcik7XG4gICAgICAgIGNhc2UgTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMuYm90dG9tTGVmdE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyLCBjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wTGVmdElubmVyKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlUGF0aEZyb21DdXJ2ZXMgPSBmdW5jdGlvbiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhvdXRlcjEsIGlubmVyMSwgb3V0ZXIyLCBpbm5lcjIpIHtcbiAgICB2YXIgcGF0aCA9IFtdO1xuICAgIGlmIChvdXRlcjEgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMS5zdWJkaXZpZGUoMC41LCBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChvdXRlcjEpO1xuICAgIH1cblxuICAgIGlmIChvdXRlcjIgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMi5zdWJkaXZpZGUoMC41LCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMik7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyMiBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIyLnN1YmRpdmlkZSgwLjUsIHRydWUpLnJldmVyc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMik7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyMSBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIxLnN1YmRpdmlkZSgwLjUsIGZhbHNlKS5yZXZlcnNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xufTtcblxudmFyIGNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCb3JkZXJCb3hQYXRoKGN1cnZlcykge1xuICAgIHJldHVybiBbY3VydmVzLnRvcExlZnRPdXRlciwgY3VydmVzLnRvcFJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdE91dGVyXTtcbn07XG5cbnZhciBjYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVQYWRkaW5nQm94UGF0aChjdXJ2ZXMpIHtcbiAgICByZXR1cm4gW2N1cnZlcy50b3BMZWZ0SW5uZXIsIGN1cnZlcy50b3BSaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lcl07XG59O1xuXG52YXIgcGFyc2VCb3VuZEN1cnZlcyA9IGV4cG9ydHMucGFyc2VCb3VuZEN1cnZlcyA9IGZ1bmN0aW9uIHBhcnNlQm91bmRDdXJ2ZXMoYm91bmRzLCBib3JkZXJzLCBib3JkZXJSYWRpdXMpIHtcbiAgICB2YXIgdGxoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfTEVGVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciB0bHYgPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9MRUZUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciB0cmggPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9SSUdIVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciB0cnYgPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9SSUdIVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgYnJoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fUklHSFRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgYnJ2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fUklHSFRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIGJsaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX0xFRlRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB2YXIgYmx2ID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fTEVGVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcblxuICAgIHZhciBmYWN0b3JzID0gW107XG4gICAgZmFjdG9ycy5wdXNoKCh0bGggKyB0cmgpIC8gYm91bmRzLndpZHRoKTtcbiAgICBmYWN0b3JzLnB1c2goKGJsaCArIGJyaCkgLyBib3VuZHMud2lkdGgpO1xuICAgIGZhY3RvcnMucHVzaCgodGx2ICsgYmx2KSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIGZhY3RvcnMucHVzaCgodHJ2ICsgYnJ2KSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBtYXhGYWN0b3IgPSBNYXRoLm1heC5hcHBseShNYXRoLCBmYWN0b3JzKTtcblxuICAgIGlmIChtYXhGYWN0b3IgPiAxKSB7XG4gICAgICAgIHRsaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRsdiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRyaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIHRydiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJyaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJydiAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJsaCAvPSBtYXhGYWN0b3I7XG4gICAgICAgIGJsdiAvPSBtYXhGYWN0b3I7XG4gICAgfVxuXG4gICAgdmFyIHRvcFdpZHRoID0gYm91bmRzLndpZHRoIC0gdHJoO1xuICAgIHZhciByaWdodEhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBicnY7XG4gICAgdmFyIGJvdHRvbVdpZHRoID0gYm91bmRzLndpZHRoIC0gYnJoO1xuICAgIHZhciBsZWZ0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJsdjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcExlZnRPdXRlcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIHRsaCwgdGx2LCBDT1JORVIuVE9QX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQsIGJvdW5kcy50b3ApLFxuICAgICAgICB0b3BMZWZ0SW5uZXI6IHRsaCA+IDAgfHwgdGx2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgTWF0aC5tYXgoMCwgdGxoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIE1hdGgubWF4KDAsIHRsdiAtIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksIENPUk5FUi5UT1BfTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLFxuICAgICAgICB0b3BSaWdodE91dGVyOiB0cmggPiAwIHx8IHRydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIHRvcFdpZHRoLCBib3VuZHMudG9wLCB0cmgsIHRydiwgQ09STkVSLlRPUF9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCwgYm91bmRzLnRvcCksXG4gICAgICAgIHRvcFJpZ2h0SW5uZXI6IHRyaCA+IDAgfHwgdHJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgTWF0aC5taW4odG9wV2lkdGgsIGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCB0b3BXaWR0aCA+IGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggPyAwIDogdHJoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgdHJ2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBDT1JORVIuVE9QX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLFxuICAgICAgICBib3R0b21SaWdodE91dGVyOiBicmggPiAwIHx8IGJydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvdHRvbVdpZHRoLCBib3VuZHMudG9wICsgcmlnaHRIZWlnaHQsIGJyaCwgYnJ2LCBDT1JORVIuQk9UVE9NX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCksXG4gICAgICAgIGJvdHRvbVJpZ2h0SW5uZXI6IGJyaCA+IDAgfHwgYnJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgTWF0aC5taW4oYm90dG9tV2lkdGgsIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMudG9wICsgTWF0aC5taW4ocmlnaHRIZWlnaHQsIGJvdW5kcy5oZWlnaHQgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLCBNYXRoLm1heCgwLCBicmggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCksIGJydiAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCwgQ09STkVSLkJPVFRPTV9SSUdIVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIGJvdHRvbUxlZnRPdXRlcjogYmxoID4gMCB8fCBibHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBibGgsIGJsdiwgQ09STkVSLkJPVFRPTV9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCksXG4gICAgICAgIGJvdHRvbUxlZnRJbm5lcjogYmxoID4gMCB8fCBibHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgbGVmdEhlaWdodCwgTWF0aC5tYXgoMCwgYmxoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJsdiAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aCwgQ09STkVSLkJPVFRPTV9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpXG4gICAgfTtcbn07XG5cbnZhciBDT1JORVIgPSB7XG4gICAgVE9QX0xFRlQ6IDAsXG4gICAgVE9QX1JJR0hUOiAxLFxuICAgIEJPVFRPTV9SSUdIVDogMixcbiAgICBCT1RUT01fTEVGVDogM1xufTtcblxudmFyIGdldEN1cnZlUG9pbnRzID0gZnVuY3Rpb24gZ2V0Q3VydmVQb2ludHMoeCwgeSwgcjEsIHIyLCBwb3NpdGlvbikge1xuICAgIHZhciBrYXBwYSA9IDQgKiAoKE1hdGguc3FydCgyKSAtIDEpIC8gMyk7XG4gICAgdmFyIG94ID0gcjEgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxuICAgIHZhciBveSA9IHIyICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXG4gICAgdmFyIHhtID0geCArIHIxOyAvLyB4LW1pZGRsZVxuICAgIHZhciB5bSA9IHkgKyByMjsgLy8geS1taWRkbGVcblxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBDT1JORVIuVE9QX0xFRlQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltIC0gb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSAtIG94LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpKTtcbiAgICAgICAgY2FzZSBDT1JORVIuVE9QX1JJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHggKyBveCwgeSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSAtIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltKSk7XG4gICAgICAgIGNhc2UgQ09STkVSLkJPVFRPTV9SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkgKyBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHggKyBveCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5CT1RUT01fTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtIC0gb3gsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSArIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeSkpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsb25lV2luZG93ID0gZXhwb3J0cy5Eb2N1bWVudENsb25lciA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfUHJveHkgPSByZXF1aXJlKCcuL1Byb3h5Jyk7XG5cbnZhciBfUmVzb3VyY2VMb2FkZXIgPSByZXF1aXJlKCcuL1Jlc291cmNlTG9hZGVyJyk7XG5cbnZhciBfUmVzb3VyY2VMb2FkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzb3VyY2VMb2FkZXIpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JhY2tncm91bmQnKTtcblxudmFyIF9DYW52YXNSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvQ2FudmFzUmVuZGVyZXInKTtcblxudmFyIF9DYW52YXNSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYW52YXNSZW5kZXJlcik7XG5cbnZhciBfUHNldWRvTm9kZUNvbnRlbnQgPSByZXF1aXJlKCcuL1BzZXVkb05vZGVDb250ZW50Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJR05PUkVfQVRUUklCVVRFID0gJ2RhdGEtaHRtbDJjYW52YXMtaWdub3JlJztcblxudmFyIERvY3VtZW50Q2xvbmVyID0gZXhwb3J0cy5Eb2N1bWVudENsb25lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N1bWVudENsb25lcihlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIGNvcHlJbmxpbmUsIHJlbmRlcmVyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudENsb25lcik7XG5cbiAgICAgICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuY29weVN0eWxlcyA9IGNvcHlJbmxpbmU7XG4gICAgICAgIHRoaXMuaW5saW5lSW1hZ2VzID0gY29weUlubGluZTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlciA9IG5ldyBfUmVzb3VyY2VMb2FkZXIyLmRlZmF1bHQob3B0aW9ucywgbG9nZ2VyLCB3aW5kb3cpO1xuICAgICAgICB0aGlzLnBzZXVkb0NvbnRlbnREYXRhID0ge1xuICAgICAgICAgICAgY291bnRlcnM6IHt9LFxuICAgICAgICAgICAgcXVvdGVEZXB0aDogMFxuICAgICAgICB9O1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5jbG9uZU5vZGUoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERvY3VtZW50Q2xvbmVyLCBbe1xuICAgICAgICBrZXk6ICdpbmxpbmVBbGxJbWFnZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lQWxsSW1hZ2VzKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlubGluZUltYWdlcyAmJiBub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCgoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHN0eWxlLmJhY2tncm91bmRJbWFnZSkubWFwKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb3VyY2VMb2FkZXIuaW5saW5lSW1hZ2UoYmFja2dyb3VuZEltYWdlLmFyZ3NbMF0pLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWcgJiYgdHlwZW9mIGltZy5zcmMgPT09ICdzdHJpbmcnID8gJ3VybChcIicgKyBpbWcuc3JjICsgJ1wiKScgOiAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyArIGJhY2tncm91bmRJbWFnZS5wcmVmaXggKyBiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kICsgJygnICsgYmFja2dyb3VuZEltYWdlLmFyZ3Muam9pbignLCcpICsgJyknKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIE11bHRpcGxlIGJhY2tncm91bmRzIHNvbWVob3cgYnJva2VuIGluIENocm9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlcy5qb2luKCcsJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlci5pbmxpbmVJbWFnZShub2RlLnNyYykudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nICYmIG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9ICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLnN0eWxlLCBpbWcuY2xvbmVOb2RlKGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkQ2hpbGQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lubGluZUZvbnRzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlubGluZUZvbnRzKGRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpLm1hcChmdW5jdGlvbiAoc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaHJlZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goc2hlZXQuaHJlZikudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0KHRleHQsIHNoZWV0LmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgc3R5bGVzaGVldCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFNoZWV0Rm9udHMoc2hlZXQsIGRvY3VtZW50KTtcbiAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChmb250cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb250cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZm9udCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChmb250KTtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChmb250cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGZvbnQuZm9ybWF0c1swXS5zcmMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQuZm9udEZhY2Uuc2V0UHJvcGVydHkoJ3NyYycsICd1cmwoXCInICsgZGF0YVVyaSArICdcIiknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQGZvbnQtZmFjZSB7JyArIGZvbnQuZm9udEZhY2UuY3NzVGV4dCArICcgJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZm9udENzcykge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBmb250Q3NzLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgICAgIF90aGlzMi5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUVsZW1lbnRDbG9uZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50Q2xvbmUobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcHlTdHlsZXMgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gbm9kZS50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZztcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBjbG9uZSBjYW52YXMgY29udGVudHMsIGNhbnZhcyBpcyB0YWludGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcElmcmFtZSA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lS2V5ID0gZ2VuZXJhdGVJZnJhbWVLZXkoKTtcbiAgICAgICAgICAgICAgICB0ZW1wSWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pbnRlcm5hbC1pZnJhbWUta2V5JywgaWZyYW1lS2V5KTtcblxuICAgICAgICAgICAgICAgIHZhciBfcGFyc2VCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgMCwgMCksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3BhcnNlQm91bmRzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcGFyc2VCb3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlci5jYWNoZVtpZnJhbWVLZXldID0gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVuZGVyZXIoZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogX3RoaXMzLm9wdGlvbnMuYXN5bmMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1RhaW50OiBfdGhpczMub3B0aW9ucy5hbGxvd1RhaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVRpbWVvdXQ6IF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dpbmc6IF90aGlzMy5vcHRpb25zLmxvZ2dpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogX3RoaXMzLm9wdGlvbnMucHJveHksXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb250YWluZXI6IF90aGlzMy5vcHRpb25zLnJlbW92ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBfdGhpczMub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVpZ25PYmplY3RSZW5kZXJpbmc6IF90aGlzMy5vcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiBfdGhpczMub3B0aW9ucy51c2VDT1JTLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBuZXcgX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9LCBfdGhpczMubG9nZ2VyLmNoaWxkKGlmcmFtZUtleSkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlmcmFtZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wSWZyYW1lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSWZyYW1lLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSwgaWZyYW1lQ2FudmFzKSwgdGVtcElmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wSWZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgJiYgbm9kZS5zaGVldCAmJiBub2RlLnNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IFtdLnNsaWNlLmNhbGwobm9kZS5zaGVldC5jc3NSdWxlcywgMCkucmVkdWNlKGZ1bmN0aW9uIChjc3MsIHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlICYmIHJ1bGUuY3NzVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3MgKyBydWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5sb2dnZXIubG9nKCdVbmFibGUgdG8gYWNjZXNzIGNzc1RleHQgcHJvcGVydHknLCBydWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbG9uZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogdGhpcy5jcmVhdGVFbGVtZW50Q2xvbmUobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIHN0eWxlQmVmb3JlID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsICc6YmVmb3JlJykgOiBudWxsO1xuICAgICAgICAgICAgdmFyIHN0eWxlQWZ0ZXIgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgJzphZnRlcicpIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlRWxlbWVudCA9PT0gbm9kZSAmJiBjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCA9IGNsb25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEJvZHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHNldWRvSGlkZVN0eWxlcyhjbG9uZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb3VudGVycyA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucGFyc2VDb3VudGVyUmVzZXQpKHN0eWxlLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50QmVmb3JlID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5yZXNvbHZlUHNldWRvQ29udGVudCkobm9kZSwgc3R5bGVCZWZvcmUsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8IGNoaWxkLm5vZGVOYW1lICE9PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAhY2hpbGQuaGFzQXR0cmlidXRlKElHTk9SRV9BVFRSSUJVVEUpICYmICh0eXBlb2YgdGhpcy5vcHRpb25zLmlnbm9yZUVsZW1lbnRzICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29weVN0eWxlcyB8fCBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRlbnRBZnRlciA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucmVzb2x2ZVBzZXVkb0NvbnRlbnQpKG5vZGUsIHN0eWxlQWZ0ZXIsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuICAgICAgICAgICAgKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5wb3BDb3VudGVycykoY291bnRlcnMsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAmJiBjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUJlZm9yZSwgY29udGVudEJlZm9yZSwgUFNFVURPX0JFRk9SRSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVBZnRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUFmdGVyLCBjb250ZW50QWZ0ZXIsIFBTRVVET19BRlRFUikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUgJiYgdGhpcy5jb3B5U3R5bGVzICYmICEobm9kZSBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIGNsb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBbGxJbWFnZXMoY2xvbmUpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnNjcm9sbFRvcCAhPT0gMCB8fCBub2RlLnNjcm9sbExlZnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzLnB1c2goW2Nsb25lLCBub2RlLnNjcm9sbExlZnQsIG5vZGUuc2Nyb2xsVG9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcHlTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUNhbnZhc0NvbnRlbnRzKG5vZGUsIGNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdURVhUQVJFQSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NFTEVDVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS52YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRG9jdW1lbnRDbG9uZXI7XG59KCk7XG5cbnZhciBnZXRTaGVldEZvbnRzID0gZnVuY3Rpb24gZ2V0U2hlZXRGb250cyhzaGVldCwgZG9jdW1lbnQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIChzaGVldC5jc3NSdWxlcyA/IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMpIDogW10pLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICByZXR1cm4gcnVsZS50eXBlID09PSBDU1NSdWxlLkZPTlRfRkFDRV9SVUxFO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICB2YXIgc3JjID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKTtcbiAgICAgICAgdmFyIGZvcm1hdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcmNbaV0ubWV0aG9kID09PSAndXJsJyAmJiBzcmNbaSArIDFdICYmIHNyY1tpICsgMV0ubWV0aG9kID09PSAnZm9ybWF0Jykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgIGEuaHJlZiA9IHNyY1tpXS5hcmdzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogYS5ocmVmLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHNyY1tpICsgMV0uYXJnc1swXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0cy5wdXNoKGZvbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2VsZWN0IGNvcnJlY3QgZm9ybWF0IGZvciBicm93c2VyKSxcblxuICAgICAgICAgICAgZm9ybWF0czogZm9ybWF0cy5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC9ed29mZi9pLnRlc3QoZm9udC5mb3JtYXQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZm9udEZhY2U6IHJ1bGUuc3R5bGVcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQuZm9ybWF0cy5sZW5ndGg7XG4gICAgfSk7XG59O1xuXG52YXIgY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCh0ZXh0LCBiYXNlSHJlZikge1xuICAgIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xuICAgIHZhciBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBiYXNlLmhyZWYgPSBiYXNlSHJlZjtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChkb2MuaGVhZCkge1xuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICB9XG4gICAgaWYgKGRvYy5ib2R5KSB7XG4gICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGUuc2hlZXQgPyBnZXRTaGVldEZvbnRzKHN0eWxlLnNoZWV0LCBkb2MpIDogW107XG59O1xuXG52YXIgcmVzdG9yZU93bmVyU2Nyb2xsID0gZnVuY3Rpb24gcmVzdG9yZU93bmVyU2Nyb2xsKG93bmVyRG9jdW1lbnQsIHgsIHkpIHtcbiAgICBpZiAob3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyAmJiAoeCAhPT0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCB8fCB5ICE9PSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0KSkge1xuICAgICAgICBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbn07XG5cbnZhciBjbG9uZUNhbnZhc0NvbnRlbnRzID0gZnVuY3Rpb24gY2xvbmVDYW52YXNDb250ZW50cyhjYW52YXMsIGNsb25lZENhbnZhcykge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChjbG9uZWRDYW52YXMpIHtcbiAgICAgICAgICAgIGNsb25lZENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGNsb25lZENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdmFyIGNsb25lZEN0eCA9IGNsb25lZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGNsb25lZEN0eC5wdXRJbWFnZURhdGEoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLCAwLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbn07XG5cbnZhciBpbmxpbmVQc2V1ZG9FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGUsIGNvbnRlbnRJdGVtcywgcHNldWRvRWx0KSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY29udGVudCB8fCBzdHlsZS5jb250ZW50ID09PSAnbm9uZScgfHwgc3R5bGUuY29udGVudCA9PT0gJy1tb3otYWx0LWNvbnRlbnQnIHx8IHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFub255bW91c1JlcGxhY2VkRWxlbWVudCA9IGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXNwc2V1ZG9lbGVtZW50Jyk7XG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQpO1xuXG4gICAgaWYgKGNvbnRlbnRJdGVtcykge1xuICAgICAgICB2YXIgbGVuID0gY29udGVudEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb250ZW50SXRlbXNbaV07XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX1BzZXVkb05vZGVDb250ZW50LlBTRVVET19DT05URU5UX0lURU1fVFlQRS5JTUFHRTpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKCd1cmwoJyArIGl0ZW0udmFsdWUgKyAnKScpWzBdLmFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfUHNldWRvTm9kZUNvbnRlbnQuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQ6XG4gICAgICAgICAgICAgICAgICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0udmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuY2xhc3NOYW1lID0gUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgKyAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSO1xuICAgIGNsb25lLmNsYXNzTmFtZSArPSBwc2V1ZG9FbHQgPT09IFBTRVVET19CRUZPUkUgPyAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSA6ICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVI7XG4gICAgaWYgKHBzZXVkb0VsdCA9PT0gUFNFVURPX0JFRk9SRSkge1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LCBjbG9uZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQ7XG59O1xuXG52YXIgVVJMX1JFR0VYUCA9IC9edXJsXFwoKC4rKVxcKSQvaTtcbnZhciBQU0VVRE9fQkVGT1JFID0gJzpiZWZvcmUnO1xudmFyIFBTRVVET19BRlRFUiA9ICc6YWZ0ZXInO1xudmFyIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFID0gJ19fX2h0bWwyY2FudmFzX19fcHNldWRvZWxlbWVudF9iZWZvcmUnO1xudmFyIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVIgPSAnX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2FmdGVyJztcblxudmFyIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUgPSAne1xcbiAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59JztcblxudmFyIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGJvZHkpIHtcbiAgICBjcmVhdGVTdHlsZXMoYm9keSwgJy4nICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgKyBQU0VVRE9fQkVGT1JFICsgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSArICdcXG4gICAgICAgICAuJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVIgKyBQU0VVRE9fQUZURVIgKyBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFKTtcbn07XG5cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoYm9keSwgc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gYm9keS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufTtcblxudmFyIGluaXROb2RlID0gZnVuY3Rpb24gaW5pdE5vZGUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDMpLFxuICAgICAgICBlbGVtZW50ID0gX3JlZjJbMF0sXG4gICAgICAgIHggPSBfcmVmMlsxXSxcbiAgICAgICAgeSA9IF9yZWYyWzJdO1xuXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0geDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHk7XG59O1xuXG52YXIgZ2VuZXJhdGVJZnJhbWVLZXkgPSBmdW5jdGlvbiBnZW5lcmF0ZUlmcmFtZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApLnRvU3RyaW5nKDE2KTtcbn07XG5cbnZhciBEQVRBX1VSSV9SRUdFWFAgPSAvXmRhdGE6dGV4dFxcLyguKyk7KGJhc2U2NCk/LCguKikkL2k7XG5cbnZhciBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQobm9kZSwgb3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZS5jb250ZW50V2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wcm94eSA/ICgwLCBfUHJveHkuUHJveHkpKG5vZGUuc3JjLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBodG1sLm1hdGNoKERBVEFfVVJJX1JFR0VYUCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXSA9PT0gJ2Jhc2U2NCcgPyB3aW5kb3cuYXRvYihkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pKSA6IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJZnJhbWVDb250YWluZXIobm9kZS5vd25lckRvY3VtZW50LCAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgMCwgMCkpLnRoZW4oZnVuY3Rpb24gKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRDbG9uZSA9IGNsb25lV2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS53cml0ZShodG1sKTtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lTG9hZCA9IGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lTG9hZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZUlmcmFtZUNvbnRhaW5lciA9IGZ1bmN0aW9uIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihvd25lckRvY3VtZW50LCBib3VuZHMpIHtcbiAgICB2YXIgY2xvbmVJZnJhbWVDb250YWluZXIgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ2h0bWwyY2FudmFzLWNvbnRhaW5lcic7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJy0xMDAwMHB4JztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIud2lkdGggPSBib3VuZHMud2lkdGgudG9TdHJpbmcoKTtcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0LnRvU3RyaW5nKCk7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc2Nyb2xsaW5nID0gJ25vJzsgLy8gaW9zIHdvbid0IHNjcm9sbCB3aXRob3V0IGl0XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKElHTk9SRV9BVFRSSUJVVEUsICd0cnVlJyk7XG4gICAgaWYgKCFvd25lckRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnQm9keSBlbGVtZW50IG5vdCBmb3VuZCBpbiBEb2N1bWVudCB0aGF0IGlzIGdldHRpbmcgcmVuZGVyZWQnIDogJycpO1xuICAgIH1cblxuICAgIG93bmVyRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcbn07XG5cbnZhciBpZnJhbWVMb2FkZXIgPSBmdW5jdGlvbiBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjbG9uZVdpbmRvdy5vbmxvYWQgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5vbmxvYWQgPSBkb2N1bWVudENsb25lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRDbG9uZS5ib2R5LmNoaWxkTm9kZXMubGVuZ3RoID4gMCAmJiBkb2N1bWVudENsb25lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xvbmVJZnJhbWVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBjbG9uZVdpbmRvdyA9IGV4cG9ydHMuY2xvbmVXaW5kb3cgPSBmdW5jdGlvbiBjbG9uZVdpbmRvdyhvd25lckRvY3VtZW50LCBib3VuZHMsIHJlZmVyZW5jZUVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyZXIpIHtcbiAgICB2YXIgY2xvbmVyID0gbmV3IERvY3VtZW50Q2xvbmVyKHJlZmVyZW5jZUVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgZmFsc2UsIHJlbmRlcmVyKTtcbiAgICB2YXIgc2Nyb2xsWCA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFkgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihvd25lckRvY3VtZW50LCBib3VuZHMpLnRoZW4oZnVuY3Rpb24gKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XG4gICAgICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgLyogQ2hyb21lIGRvZXNuJ3QgZGV0ZWN0IHJlbGF0aXZlIGJhY2tncm91bmQtaW1hZ2VzIGFzc2lnbmVkIGluIGlubGluZSA8c3R5bGU+IHNoZWV0cyB3aGVuIGZldGNoZWQgdGhyb3VnaCBnZXRDb21wdXRlZFN0eWxlXG4gICAgICAgICAgICAgaWYgd2luZG93IHVybCBpcyBhYm91dDpibGFuaywgd2UgY2FuIGFzc2lnbiB0aGUgdXJsIHRvIGN1cnJlbnQgYnkgd3JpdGluZyBvbnRvIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xvbmVyLnNjcm9sbGVkRWxlbWVudHMuZm9yRWFjaChpbml0Tm9kZSk7XG4gICAgICAgICAgICBjbG9uZVdpbmRvdy5zY3JvbGxUbyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCk7XG4gICAgICAgICAgICBpZiAoLyhpUGFkfGlQaG9uZXxpUG9kKS9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgKGNsb25lV2luZG93LnNjcm9sbFkgIT09IGJvdW5kcy50b3AgfHwgY2xvbmVXaW5kb3cuc2Nyb2xsWCAhPT0gYm91bmRzLmxlZnQpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUudG9wID0gLWJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAtYm91bmRzLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShbY2xvbmVJZnJhbWVDb250YWluZXIsIGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50LCBjbG9uZXIucmVzb3VyY2VMb2FkZXJdKTtcblxuICAgICAgICAgICAgdmFyIG9uY2xvbmUgPSBvcHRpb25zLm9uY2xvbmU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIGNsb25lV2luZG93LkhUTUxFbGVtZW50IHx8IGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gdHlwZW9mIG9uY2xvbmUgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25jbG9uZShkb2N1bWVudENsb25lKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSA6IHJlc3VsdCA6IFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnRXJyb3IgZmluZGluZyB0aGUgJyArIHJlZmVyZW5jZUVsZW1lbnQubm9kZU5hbWUgKyAnIGluIHRoZSBjbG9uZWQgZG9jdW1lbnQnIDogJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS53cml0ZShzZXJpYWxpemVEb2N0eXBlKGRvY3VtZW50LmRvY3R5cGUpICsgJzxodG1sPjwvaHRtbD4nKTtcbiAgICAgICAgLy8gQ2hyb21lIHNjcm9sbHMgdGhlIHBhcmVudCBkb2N1bWVudCBmb3Igc29tZSByZWFzb24gYWZ0ZXIgdGhlIHdyaXRlIHRvIHRoZSBjbG9uZWQgd2luZG93Pz8/XG4gICAgICAgIHJlc3RvcmVPd25lclNjcm9sbChyZWZlcmVuY2VFbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICBkb2N1bWVudENsb25lLnJlcGxhY2VDaGlsZChkb2N1bWVudENsb25lLmFkb3B0Tm9kZShjbG9uZXIuZG9jdW1lbnRFbGVtZW50KSwgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICBkb2N1bWVudENsb25lLmNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuIGlmcmFtZUxvYWQ7XG4gICAgfSk7XG59O1xuXG52YXIgc2VyaWFsaXplRG9jdHlwZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZURvY3R5cGUoZG9jdHlwZSkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgICBzdHIgKz0gJzwhRE9DVFlQRSAnO1xuICAgICAgICBpZiAoZG9jdHlwZS5uYW1lKSB7XG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUuaW50ZXJuYWxTdWJzZXQpIHtcbiAgICAgICAgICAgIHN0ciArPSBkb2N0eXBlLmludGVybmFsU3Vic2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUucHVibGljSWQpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5wdWJsaWNJZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdHlwZS5zeXN0ZW1JZCkge1xuICAgICAgICAgICAgc3RyICs9ICdcIicgKyBkb2N0eXBlLnN5c3RlbUlkICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSEVYMyA9IC9eIyhbYS1mMC05XXszfSkkL2k7XG52YXIgaGV4MyA9IGZ1bmN0aW9uIGhleDModmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChIRVgzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtwYXJzZUludChtYXRjaFsxXVswXSArIG1hdGNoWzFdWzBdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzFdICsgbWF0Y2hbMV1bMV0sIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV1bMl0gKyBtYXRjaFsxXVsyXSwgMTYpLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIEhFWDYgPSAvXiMoW2EtZjAtOV17Nn0pJC9pO1xudmFyIGhleDYgPSBmdW5jdGlvbiBoZXg2KHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYNik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDIpLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygyLCA0KSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoNCwgNiksIDE2KSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBSR0IgPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC87XG52YXIgcmdiID0gZnVuY3Rpb24gcmdiKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIFJHQkEgPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKylcXHMqXFwpJC87XG52YXIgcmdiYSA9IGZ1bmN0aW9uIHJnYmEodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChSR0JBKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gNCkge1xuICAgICAgICByZXR1cm4gW051bWJlcihtYXRjaFsxXSksIE51bWJlcihtYXRjaFsyXSksIE51bWJlcihtYXRjaFszXSksIE51bWJlcihtYXRjaFs0XSldO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIFtNYXRoLm1pbihhcnJheVswXSwgMjU1KSwgTWF0aC5taW4oYXJyYXlbMV0sIDI1NSksIE1hdGgubWluKGFycmF5WzJdLCAyNTUpLCBhcnJheS5sZW5ndGggPiAzID8gYXJyYXlbM10gOiBudWxsXTtcbn07XG5cbnZhciBuYW1lZENvbG9yID0gZnVuY3Rpb24gbmFtZWRDb2xvcihuYW1lKSB7XG4gICAgdmFyIGNvbG9yID0gTkFNRURfQ09MT1JTW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgcmV0dXJuIGNvbG9yID8gY29sb3IgOiBmYWxzZTtcbn07XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xvcih2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xuXG4gICAgICAgIHZhciBfcmVmID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBmcm9tQXJyYXkodmFsdWUpIDogaGV4Myh2YWx1ZSkgfHwgcmdiKHZhbHVlKSB8fCByZ2JhKHZhbHVlKSB8fCBuYW1lZENvbG9yKHZhbHVlKSB8fCBoZXg2KHZhbHVlKSB8fCBbMCwgMCwgMCwgbnVsbF0sXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDQpLFxuICAgICAgICAgICAgciA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgZyA9IF9yZWYyWzFdLFxuICAgICAgICAgICAgYiA9IF9yZWYyWzJdLFxuICAgICAgICAgICAgYSA9IF9yZWYyWzNdO1xuXG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgICAgICBrZXk6ICdpc1RyYW5zcGFyZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hID09PSAwO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmEgIT09IG51bGwgJiYgdGhpcy5hICE9PSAxID8gJ3JnYmEoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcsJyArIHRoaXMuYSArICcpJyA6ICdyZ2IoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcpJztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb2xvcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XG5cblxudmFyIE5BTUVEX0NPTE9SUyA9IHtcbiAgICB0cmFuc3BhcmVudDogWzAsIDAsIDAsIDBdLFxuICAgIGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTUsIG51bGxdLFxuICAgIGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTUsIG51bGxdLFxuICAgIGFxdWE6IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTIsIG51bGxdLFxuICAgIGF6dXJlOiBbMjQwLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYmVpZ2U6IFsyNDUsIDI0NSwgMjIwLCBudWxsXSxcbiAgICBiaXNxdWU6IFsyNTUsIDIyOCwgMTk2LCBudWxsXSxcbiAgICBibGFjazogWzAsIDAsIDAsIG51bGxdLFxuICAgIGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNSwgbnVsbF0sXG4gICAgYmx1ZTogWzAsIDAsIDI1NSwgbnVsbF0sXG4gICAgYmx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNiwgbnVsbF0sXG4gICAgYnJvd246IFsxNjUsIDQyLCA0MiwgbnVsbF0sXG4gICAgYnVybHl3b29kOiBbMjIyLCAxODQsIDEzNSwgbnVsbF0sXG4gICAgY2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwLCBudWxsXSxcbiAgICBjaGFydHJldXNlOiBbMTI3LCAyNTUsIDAsIG51bGxdLFxuICAgIGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMCwgbnVsbF0sXG4gICAgY29yYWw6IFsyNTUsIDEyNywgODAsIG51bGxdLFxuICAgIGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzNywgbnVsbF0sXG4gICAgY29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwLCBudWxsXSxcbiAgICBjcmltc29uOiBbMjIwLCAyMCwgNjAsIG51bGxdLFxuICAgIGN5YW46IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgZGFya2JsdWU6IFswLCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtjeWFuOiBbMCwgMTM5LCAxMzksIG51bGxdLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTEsIG51bGxdLFxuICAgIGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OSwgbnVsbF0sXG4gICAgZGFya2dyZWVuOiBbMCwgMTAwLCAwLCBudWxsXSxcbiAgICBkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxuICAgIGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDcsIG51bGxdLFxuICAgIGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDcsIG51bGxdLFxuICAgIGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMCwgbnVsbF0sXG4gICAgZGFya29yY2hpZDogWzE1MywgNTAsIDIwNCwgbnVsbF0sXG4gICAgZGFya3JlZDogWzEzOSwgMCwgMCwgbnVsbF0sXG4gICAgZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjIsIG51bGxdLFxuICAgIGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDMsIG51bGxdLFxuICAgIGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOSwgbnVsbF0sXG4gICAgZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzksIG51bGxdLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5LCBudWxsXSxcbiAgICBkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDksIG51bGxdLFxuICAgIGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMSwgbnVsbF0sXG4gICAgZGVlcHBpbms6IFsyNTUsIDIwLCAxNDcsIG51bGxdLFxuICAgIGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTUsIG51bGxdLFxuICAgIGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1LCBudWxsXSxcbiAgICBkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXG4gICAgZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NSwgbnVsbF0sXG4gICAgZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzQsIG51bGxdLFxuICAgIGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MCwgbnVsbF0sXG4gICAgZm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNCwgbnVsbF0sXG4gICAgZnVjaHNpYTogWzI1NSwgMCwgMjU1LCBudWxsXSxcbiAgICBnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwLCBudWxsXSxcbiAgICBnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NSwgbnVsbF0sXG4gICAgZ29sZDogWzI1NSwgMjE1LCAwLCBudWxsXSxcbiAgICBnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzIsIG51bGxdLFxuICAgIGdyYXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBncmVlbjogWzAsIDEyOCwgMCwgbnVsbF0sXG4gICAgZ3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDcsIG51bGxdLFxuICAgIGdyZXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBob25leWRldzogWzI0MCwgMjU1LCAyNDAsIG51bGxdLFxuICAgIGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwLCBudWxsXSxcbiAgICBpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5MiwgbnVsbF0sXG4gICAgaW5kaWdvOiBbNzUsIDAsIDEzMCwgbnVsbF0sXG4gICAgaXZvcnk6IFsyNTUsIDI1NSwgMjQwLCBudWxsXSxcbiAgICBraGFraTogWzI0MCwgMjMwLCAxNDAsIG51bGxdLFxuICAgIGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MCwgbnVsbF0sXG4gICAgbGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDUsIG51bGxdLFxuICAgIGxhd25ncmVlbjogWzEyNCwgMjUyLCAwLCBudWxsXSxcbiAgICBsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1LCBudWxsXSxcbiAgICBsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwLCBudWxsXSxcbiAgICBsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgbGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwLCBudWxsXSxcbiAgICBsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExLCBudWxsXSxcbiAgICBsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NCwgbnVsbF0sXG4gICAgbGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXG4gICAgbGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5MywgbnVsbF0sXG4gICAgbGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyLCBudWxsXSxcbiAgICBsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwLCBudWxsXSxcbiAgICBsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwLCBudWxsXSxcbiAgICBsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTMsIG51bGxdLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1MywgbnVsbF0sXG4gICAgbGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyLCBudWxsXSxcbiAgICBsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjQsIG51bGxdLFxuICAgIGxpbWU6IFswLCAyNTUsIDAsIG51bGxdLFxuICAgIGxpbWVncmVlbjogWzUwLCAyMDUsIDUwLCBudWxsXSxcbiAgICBsaW5lbjogWzI1MCwgMjQwLCAyMzAsIG51bGxdLFxuICAgIG1hZ2VudGE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXG4gICAgbWFyb29uOiBbMTI4LCAwLCAwLCBudWxsXSxcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MCwgbnVsbF0sXG4gICAgbWVkaXVtYmx1ZTogWzAsIDAsIDIwNSwgbnVsbF0sXG4gICAgbWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExLCBudWxsXSxcbiAgICBtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5LCBudWxsXSxcbiAgICBtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExMywgbnVsbF0sXG4gICAgbWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOCwgbnVsbF0sXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NCwgbnVsbF0sXG4gICAgbWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0LCBudWxsXSxcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzMsIG51bGxdLFxuICAgIG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyLCBudWxsXSxcbiAgICBtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwLCBudWxsXSxcbiAgICBtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1LCBudWxsXSxcbiAgICBtb2NjYXNpbjogWzI1NSwgMjI4LCAxODEsIG51bGxdLFxuICAgIG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3MywgbnVsbF0sXG4gICAgbmF2eTogWzAsIDAsIDEyOCwgbnVsbF0sXG4gICAgb2xkbGFjZTogWzI1MywgMjQ1LCAyMzAsIG51bGxdLFxuICAgIG9saXZlOiBbMTI4LCAxMjgsIDAsIG51bGxdLFxuICAgIG9saXZlZHJhYjogWzEwNywgMTQyLCAzNSwgbnVsbF0sXG4gICAgb3JhbmdlOiBbMjU1LCAxNjUsIDAsIG51bGxdLFxuICAgIG9yYW5nZXJlZDogWzI1NSwgNjksIDAsIG51bGxdLFxuICAgIG9yY2hpZDogWzIxOCwgMTEyLCAyMTQsIG51bGxdLFxuICAgIHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwLCBudWxsXSxcbiAgICBwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyLCBudWxsXSxcbiAgICBwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOCwgbnVsbF0sXG4gICAgcGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDcsIG51bGxdLFxuICAgIHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzLCBudWxsXSxcbiAgICBwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1LCBudWxsXSxcbiAgICBwZXJ1OiBbMjA1LCAxMzMsIDYzLCBudWxsXSxcbiAgICBwaW5rOiBbMjU1LCAxOTIsIDIwMywgbnVsbF0sXG4gICAgcGx1bTogWzIyMSwgMTYwLCAyMjEsIG51bGxdLFxuICAgIHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwLCBudWxsXSxcbiAgICBwdXJwbGU6IFsxMjgsIDAsIDEyOCwgbnVsbF0sXG4gICAgcmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1MywgbnVsbF0sXG4gICAgcmVkOiBbMjU1LCAwLCAwLCBudWxsXSxcbiAgICByb3N5YnJvd246IFsxODgsIDE0MywgMTQzLCBudWxsXSxcbiAgICByb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjUsIG51bGxdLFxuICAgIHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTksIG51bGxdLFxuICAgIHNhbG1vbjogWzI1MCwgMTI4LCAxMTQsIG51bGxdLFxuICAgIHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTYsIG51bGxdLFxuICAgIHNlYWdyZWVuOiBbNDYsIDEzOSwgODcsIG51bGxdLFxuICAgIHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOCwgbnVsbF0sXG4gICAgc2llbm5hOiBbMTYwLCA4MiwgNDUsIG51bGxdLFxuICAgIHNpbHZlcjogWzE5MiwgMTkyLCAxOTIsIG51bGxdLFxuICAgIHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1LCBudWxsXSxcbiAgICBzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDUsIG51bGxdLFxuICAgIHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNub3c6IFsyNTUsIDI1MCwgMjUwLCBudWxsXSxcbiAgICBzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3LCBudWxsXSxcbiAgICBzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODAsIG51bGxdLFxuICAgIHRhbjogWzIxMCwgMTgwLCAxNDAsIG51bGxdLFxuICAgIHRlYWw6IFswLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgdGhpc3RsZTogWzIxNiwgMTkxLCAyMTYsIG51bGxdLFxuICAgIHRvbWF0bzogWzI1NSwgOTksIDcxLCBudWxsXSxcbiAgICB0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDgsIG51bGxdLFxuICAgIHZpb2xldDogWzIzOCwgMTMwLCAyMzgsIG51bGxdLFxuICAgIHdoZWF0OiBbMjQ1LCAyMjIsIDE3OSwgbnVsbF0sXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1LCBudWxsXSxcbiAgICB3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NSwgbnVsbF0sXG4gICAgeWVsbG93OiBbMjU1LCAyNTUsIDAsIG51bGxdLFxuICAgIHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwLCBudWxsXVxufTtcblxudmFyIFRSQU5TUEFSRU5UID0gZXhwb3J0cy5UUkFOU1BBUkVOVCA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMF0pOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvRm9yZWlnbk9iamVjdFJlbmRlcmVyJyk7XG5cbnZhciB0ZXN0UmFuZ2VCb3VuZHMgPSBmdW5jdGlvbiB0ZXN0UmFuZ2VCb3VuZHMoZG9jdW1lbnQpIHtcbiAgICB2YXIgVEVTVF9IRUlHSFQgPSAxMjM7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgaWYgKHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm91bmR0ZXN0Jyk7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBURVNUX0hFSUdIVCArICdweCc7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRlc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHZhciByYW5nZUJvdW5kcyA9IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIHJhbmdlSGVpZ2h0ID0gTWF0aC5yb3VuZChyYW5nZUJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXN0RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocmFuZ2VIZWlnaHQgPT09IFRFU1RfSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBpT1MgMTAuMyB0YWludHMgY2FudmFzIHdpdGggYmFzZTY0IGltYWdlcyB1bmxlc3MgY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xudmFyIHRlc3RCYXNlNjQgPSBmdW5jdGlvbiB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpIHtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAvLyBTaW5nbGUgcGl4ZWwgYmFzZTY0IGltYWdlIHJlbmRlcnMgZmluZSBvbiBpT1MgMTAuMz8/P1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuXG4gICAgICAgIHZhciBvbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbWcub25sb2FkID0gb25sb2FkO1xuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciB0ZXN0Q09SUyA9IGZ1bmN0aW9uIHRlc3RDT1JTKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IEltYWdlKCkuY3Jvc3NPcmlnaW4gIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHRlc3RSZXNwb25zZVR5cGUgPSBmdW5jdGlvbiB0ZXN0UmVzcG9uc2VUeXBlKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IFhNTEh0dHBSZXF1ZXN0KCkucmVzcG9uc2VUeXBlID09PSAnc3RyaW5nJztcbn07XG5cbnZhciB0ZXN0U1ZHID0gZnVuY3Rpb24gdGVzdFNWRyhkb2N1bWVudCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGltZy5zcmMgPSAnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCc+PC9zdmc+JztcblxuICAgIHRyeSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc0dyZWVuUGl4ZWwgPSBmdW5jdGlvbiBpc0dyZWVuUGl4ZWwoZGF0YSkge1xuICAgIHJldHVybiBkYXRhWzBdID09PSAwICYmIGRhdGFbMV0gPT09IDI1NSAmJiBkYXRhWzJdID09PSAwICYmIGRhdGFbM10gPT09IDI1NTtcbn07XG5cbnZhciB0ZXN0Rm9yZWlnbk9iamVjdCA9IGZ1bmN0aW9uIHRlc3RGb3JlaWduT2JqZWN0KGRvY3VtZW50KSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBzaXplID0gMTAwO1xuICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDI1NSwgMCknO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgZ3JlZW5JbWFnZVNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBpbWcuc3JjID0gZ3JlZW5JbWFnZVNyYztcbiAgICB2YXIgc3ZnID0gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuY3JlYXRlRm9yZWlnbk9iamVjdFNWRykoc2l6ZSwgc2l6ZSwgMCwgMCwgaW1nKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgcmV0dXJuICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKShzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIHZhciBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGdyZWVuSW1hZ2VTcmMgKyAnKSc7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICAgIC8vIEZpcmVmb3ggNTUgZG9lcyBub3QgcmVuZGVyIGlubGluZSA8aW1nIC8+IHRhZ3NcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChkYXRhKSA/ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKSgoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHKShzaXplLCBzaXplLCAwLCAwLCBub2RlKSkgOiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgLy8gRWRnZSBkb2VzIG5vdCByZW5kZXIgYmFja2dyb3VuZC1pbWFnZXNcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpLmRhdGEpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn07XG5cbnZhciBGRUFUVVJFUyA9IHtcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfUkFOR0VfQk9VTkRTKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJhbmdlQm91bmRzKGRvY3VtZW50KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9SQU5HRV9CT1VORFMnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1NWR19EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFNWRyhkb2N1bWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfU1ZHX0RSQVdJTkcnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0JBU0U2NF9EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9CQVNFNjRfRFJBV0lORycsIHsgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBBcnJheS5mcm9tID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB3aW5kb3cuZmV0Y2ggPT09ICdmdW5jdGlvbicgPyB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfQ09SU19JTUFHRVMoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0Q09SUygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0NPUlNfSU1BR0VTJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9SRVNQT05TRV9UWVBFKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJlc3BvbnNlVHlwZSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1JFU1BPTlNFX1RZUEUnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0NPUlNfWEhSKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQ09SU19YSFInLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZFQVRVUkVTOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Gb250TWV0cmljcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTQU1QTEVfVEVYVCA9ICdIaWRkZW4gVGV4dCc7XG5cbnZhciBGb250TWV0cmljcyA9IGV4cG9ydHMuRm9udE1ldHJpY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9udE1ldHJpY3MoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRNZXRyaWNzKTtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvbnRNZXRyaWNzLCBbe1xuICAgICAgICBrZXk6ICdfcGFyc2VNZXRyaWNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZU1ldHJpY3MoZm9udCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdmFyIGltZyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgdmFyIHNwYW4gPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHZhciBib2R5ID0gdGhpcy5fZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ05vIGRvY3VtZW50IGZvdW5kIGZvciBmb250IG1ldHJpY3MnIDogJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBfVXRpbC5TTUFMTF9JTUFHRTtcbiAgICAgICAgICAgIGltZy53aWR0aCA9IDE7XG4gICAgICAgICAgICBpbWcuaGVpZ2h0ID0gMTtcblxuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIGltZy5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnYmFzZWxpbmUnO1xuXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKFNBTVBMRV9URVhUKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIHZhciBiYXNlbGluZSA9IGltZy5vZmZzZXRUb3AgLSBzcGFuLm9mZnNldFRvcCArIDI7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTQU1QTEVfVEVYVCkpO1xuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnc3VwZXInO1xuXG4gICAgICAgICAgICB2YXIgbWlkZGxlID0gaW1nLm9mZnNldFRvcCAtIGNvbnRhaW5lci5vZmZzZXRUb3AgKyAyO1xuXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHJldHVybiB7IGJhc2VsaW5lOiBiYXNlbGluZSwgbWlkZGxlOiBtaWRkbGUgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TWV0cmljcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZXRyaWNzKGZvbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBmb250LmZvbnRGYW1pbHkgKyAnICcgKyBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdGhpcy5fcGFyc2VNZXRyaWNzKGZvbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvbnRNZXRyaWNzO1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5HUkFESUVOVF9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfQW5nbGUgPSByZXF1aXJlKCcuL0FuZ2xlJyk7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0lERV9PUl9DT1JORVIgPSAvXih0byApPyhsZWZ0fHRvcHxyaWdodHxib3R0b20pKCAobGVmdHx0b3B8cmlnaHR8Ym90dG9tKSk/JC9pO1xudmFyIFBFUkNFTlRBR0VfQU5HTEVTID0gL14oWystXT9cXGQqXFwuP1xcZCspJSAoWystXT9cXGQqXFwuP1xcZCspJSQvaTtcbnZhciBFTkRTX1dJVEhfTEVOR1RIID0gLyhweCl8JXwoIDApJC9pO1xudmFyIEZST01fVE9fQ09MT1JTVE9QID0gL14oZnJvbXx0b3xjb2xvci1zdG9wKVxcKCg/OihbXFxkLl0rKSglKT8sXFxzKik/KC4rPylcXCkkL2k7XG52YXIgUkFESUFMX1NIQVBFX0RFRklOSVRJT04gPSAvXlxccyooY2lyY2xlfGVsbGlwc2UpP1xccyooKD86KFtcXGQuXSspKHB4fHI/ZW18JSlcXHMqKD86KFtcXGQuXSspKHB4fHI/ZW18JSkpPyl8Y2xvc2VzdC1zaWRlfGNsb3Nlc3QtY29ybmVyfGZhcnRoZXN0LXNpZGV8ZmFydGhlc3QtY29ybmVyKT9cXHMqKD86YXRcXHMqKD86KGxlZnR8Y2VudGVyfHJpZ2h0KXwoW1xcZC5dKykocHh8cj9lbXwlKSlcXHMrKD86KHRvcHxjZW50ZXJ8Ym90dG9tKXwoW1xcZC5dKykocHh8cj9lbXwlKSkpPyg/Olxcc3wkKS9pO1xuXG52YXIgR1JBRElFTlRfVFlQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHtcbiAgICBMSU5FQVJfR1JBRElFTlQ6IDAsXG4gICAgUkFESUFMX0dSQURJRU5UOiAxXG59O1xuXG52YXIgUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5SQURJQUxfR1JBRElFTlRfU0hBUEUgPSB7XG4gICAgQ0lSQ0xFOiAwLFxuICAgIEVMTElQU0U6IDFcbn07XG5cbnZhciBMRU5HVEhfRk9SX1BPU0lUSU9OID0ge1xuICAgIGxlZnQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpLFxuICAgIHRvcDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyksXG4gICAgY2VudGVyOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnNTAlJyksXG4gICAgcmlnaHQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJyksXG4gICAgYm90dG9tOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpXG59O1xuXG52YXIgTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLkxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gTGluZWFyR3JhZGllbnQoY29sb3JTdG9wcywgZGlyZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmVhckdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG59O1xuXG52YXIgUmFkaWFsR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gUmFkaWFsR3JhZGllbnQoY29sb3JTdG9wcywgc2hhcGUsIGNlbnRlciwgcmFkaXVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlhbEdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuUkFESUFMX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xufTtcblxudmFyIHBhcnNlR3JhZGllbnQgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KGNvbnRhaW5lciwgX3JlZiwgYm91bmRzKSB7XG4gICAgdmFyIGFyZ3MgPSBfcmVmLmFyZ3MsXG4gICAgICAgIG1ldGhvZCA9IF9yZWYubWV0aG9kLFxuICAgICAgICBwcmVmaXggPSBfcmVmLnByZWZpeDtcblxuICAgIGlmIChtZXRob2QgPT09ICdsaW5lYXItZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgISFwcmVmaXgpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ3JhZGllbnQnICYmIGFyZ3NbMF0gPT09ICdsaW5lYXInKSB7XG4gICAgICAgIC8vIFRPRE8gaGFuZGxlIGNvcnJlY3QgYW5nbGVcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZWFyR3JhZGllbnQoWyd0byBib3R0b20nXS5jb25jYXQodHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3Muc2xpY2UoMykpKSwgYm91bmRzLCAhIXByZWZpeCk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyYWRpYWwtZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgcHJlZml4ID09PSAnLXdlYmtpdC0nID8gdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3MpIDogYXJncywgYm91bmRzKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAncmFkaWFsJykge1xuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyh0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncy5zbGljZSgxKSkpLCBib3VuZHMpO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUNvbG9yU3RvcHMgPSBmdW5jdGlvbiBwYXJzZUNvbG9yU3RvcHMoYXJncywgZmlyc3RDb2xvclN0b3BJbmRleCwgbGluZUxlbmd0aCkge1xuICAgIHZhciBjb2xvclN0b3BzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gZmlyc3RDb2xvclN0b3BJbmRleDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgdmFyIEhBU19MRU5HVEggPSBFTkRTX1dJVEhfTEVOR1RILnRlc3QodmFsdWUpO1xuICAgICAgICB2YXIgbGFzdFNwYWNlSW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignICcpO1xuICAgICAgICB2YXIgX2NvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChIQVNfTEVOR1RIID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxhc3RTcGFjZUluZGV4KSA6IHZhbHVlKTtcbiAgICAgICAgdmFyIF9zdG9wID0gSEFTX0xFTkdUSCA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHZhbHVlLnN1YnN0cmluZyhsYXN0U3BhY2VJbmRleCArIDEpKSA6IGkgPT09IGZpcnN0Q29sb3JTdG9wSW5kZXggPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSA6IGkgPT09IGFyZ3MubGVuZ3RoIC0gMSA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJykgOiBudWxsO1xuICAgICAgICBjb2xvclN0b3BzLnB1c2goeyBjb2xvcjogX2NvbG9yLCBzdG9wOiBfc3RvcCB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzID0gY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBjb2xvciA9IF9yZWYyLmNvbG9yLFxuICAgICAgICAgICAgc3RvcCA9IF9yZWYyLnN0b3A7XG5cbiAgICAgICAgdmFyIGFic29sdXRlU3RvcCA9IGxpbmVMZW5ndGggPT09IDAgPyAwIDogc3RvcCA/IHN0b3AuZ2V0QWJzb2x1dGVWYWx1ZShsaW5lTGVuZ3RoKSAvIGxpbmVMZW5ndGggOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICBzdG9wOiBhYnNvbHV0ZVN0b3BcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1swXS5zdG9wO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGlmIChwcmV2aW91c0NvbG9yU3RvcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIF9zdG9wMiA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcDtcbiAgICAgICAgICAgIGlmIChfc3RvcDIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IG4gLSBfaSArIDE7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRDb2xvclN0ZXAgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcDtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemUgPSAobmV4dENvbG9yU3RlcCAtIHByZXZpb3VzQ29sb3JTdG9wKSAvIHN0ZXBzO1xuICAgICAgICAgICAgICAgIGZvciAoOyBfaSA8IG47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbX2ldLnN0b3AgPSBwcmV2aW91c0NvbG9yU3RvcCArIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBfc3RvcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzO1xufTtcblxudmFyIHBhcnNlTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgaGFzUHJlZml4KSB7XG4gICAgdmFyIGFuZ2xlID0gKDAsIF9BbmdsZS5wYXJzZUFuZ2xlKShhcmdzWzBdKTtcbiAgICB2YXIgSEFTX1NJREVfT1JfQ09STkVSID0gU0lERV9PUl9DT1JORVIudGVzdChhcmdzWzBdKTtcbiAgICB2YXIgSEFTX0RJUkVDVElPTiA9IEhBU19TSURFX09SX0NPUk5FUiB8fCBhbmdsZSAhPT0gbnVsbCB8fCBQRVJDRU5UQUdFX0FOR0xFUy50ZXN0KGFyZ3NbMF0pO1xuICAgIHZhciBkaXJlY3Rpb24gPSBIQVNfRElSRUNUSU9OID8gYW5nbGUgIT09IG51bGwgPyBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihcbiAgICAvLyBpZiB0aGVyZSBpcyBhIHByZWZpeCwgdGhlIDDCsCBhbmdsZSBwb2ludHMgZHVlIEVhc3QgKGluc3RlYWQgb2YgTm9ydGggcGVyIFczQylcbiAgICBoYXNQcmVmaXggPyBhbmdsZSAtIE1hdGguUEkgKiAwLjUgOiBhbmdsZSwgYm91bmRzKSA6IEhBU19TSURFX09SX0NPUk5FUiA/IHBhcnNlU2lkZU9yQ29ybmVyKGFyZ3NbMF0sIGJvdW5kcykgOiBwYXJzZVBlcmNlbnRhZ2VBbmdsZShhcmdzWzBdLCBib3VuZHMpIDogY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSwgYm91bmRzKTtcbiAgICB2YXIgZmlyc3RDb2xvclN0b3BJbmRleCA9IEhBU19ESVJFQ1RJT04gPyAxIDogMDtcblxuICAgIC8vIFRPRE86IEZpeCBzb21lIGluYWNjdXJhY3kgd2l0aCBjb2xvciBzdG9wcyB3aXRoIHB4IHZhbHVlc1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5taW4oKDAsIF9VdGlsLmRpc3RhbmNlKShNYXRoLmFicyhkaXJlY3Rpb24ueDApICsgTWF0aC5hYnMoZGlyZWN0aW9uLngxKSwgTWF0aC5hYnMoZGlyZWN0aW9uLnkwKSArIE1hdGguYWJzKGRpcmVjdGlvbi55MSkpLCBib3VuZHMud2lkdGggKiAyLCBib3VuZHMuaGVpZ2h0ICogMik7XG5cbiAgICByZXR1cm4gbmV3IExpbmVhckdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBmaXJzdENvbG9yU3RvcEluZGV4LCBsaW5lTGVuZ3RoKSwgZGlyZWN0aW9uKTtcbn07XG5cbnZhciBwYXJzZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIGFyZ3MsIGJvdW5kcykge1xuICAgIHZhciBtID0gYXJnc1swXS5tYXRjaChSQURJQUxfU0hBUEVfREVGSU5JVElPTik7XG4gICAgdmFyIHNoYXBlID0gbSAmJiAobVsxXSA9PT0gJ2NpcmNsZScgfHwgLy8gZXhwbGljaXQgc2hhcGUgc3BlY2lmaWNhdGlvblxuICAgIG1bM10gIT09IHVuZGVmaW5lZCAmJiBtWzVdID09PSB1bmRlZmluZWQpIC8vIG9ubHkgb25lIHJhZGl1cyBjb29yZGluYXRlXG4gICAgPyBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFIDogUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0U7XG4gICAgdmFyIHJhZGl1cyA9IHt9O1xuICAgIHZhciBjZW50ZXIgPSB7fTtcblxuICAgIGlmIChtKSB7XG4gICAgICAgIC8vIFJhZGl1c1xuICAgICAgICBpZiAobVszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYWRpdXMueCA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bM10sIG1bNF0pLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtWzVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJhZGl1cy55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs1XSwgbVs2XSkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uXG4gICAgICAgIGlmIChtWzddKSB7XG4gICAgICAgICAgICBjZW50ZXIueCA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVs3XS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlbnRlci54ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs4XSwgbVs5XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobVsxMF0pIHtcbiAgICAgICAgICAgIGNlbnRlci55ID0gTEVOR1RIX0ZPUl9QT1NJVElPTlttWzEwXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzExXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIueSA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bMTFdLCBtWzEyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhZGllbnRDZW50ZXIgPSB7XG4gICAgICAgIHg6IGNlbnRlci54ID09PSB1bmRlZmluZWQgPyBib3VuZHMud2lkdGggLyAyIDogY2VudGVyLnguZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpLFxuICAgICAgICB5OiBjZW50ZXIueSA9PT0gdW5kZWZpbmVkID8gYm91bmRzLmhlaWdodCAvIDIgOiBjZW50ZXIueS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpXG4gICAgfTtcbiAgICB2YXIgZ3JhZGllbnRSYWRpdXMgPSBjYWxjdWxhdGVSYWRpdXMobSAmJiBtWzJdIHx8ICdmYXJ0aGVzdC1jb3JuZXInLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIHJhZGl1cywgYm91bmRzKTtcblxuICAgIHJldHVybiBuZXcgUmFkaWFsR3JhZGllbnQocGFyc2VDb2xvclN0b3BzKGFyZ3MsIG0gPyAxIDogMCwgTWF0aC5taW4oZ3JhZGllbnRSYWRpdXMueCwgZ3JhZGllbnRSYWRpdXMueSkpLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIGdyYWRpZW50UmFkaXVzKTtcbn07XG5cbnZhciBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKHJhZGlhbiwgYm91bmRzKSB7XG4gICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuICAgIHZhciBIQUxGX1dJRFRIID0gd2lkdGggKiAwLjU7XG4gICAgdmFyIEhBTEZfSEVJR0hUID0gaGVpZ2h0ICogMC41O1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5hYnMod2lkdGggKiBNYXRoLnNpbihyYWRpYW4pKSArIE1hdGguYWJzKGhlaWdodCAqIE1hdGguY29zKHJhZGlhbikpO1xuICAgIHZhciBIQUxGX0xJTkVfTEVOR1RIID0gbGluZUxlbmd0aCAvIDI7XG5cbiAgICB2YXIgeDAgPSBIQUxGX1dJRFRIICsgTWF0aC5zaW4ocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XG4gICAgdmFyIHkwID0gSEFMRl9IRUlHSFQgLSBNYXRoLmNvcyhyYWRpYW4pICogSEFMRl9MSU5FX0xFTkdUSDtcbiAgICB2YXIgeDEgPSB3aWR0aCAtIHgwO1xuICAgIHZhciB5MSA9IGhlaWdodCAtIHkwO1xuXG4gICAgcmV0dXJuIHsgeDA6IHgwLCB4MTogeDEsIHkwOiB5MCwgeTE6IHkxIH07XG59O1xuXG52YXIgcGFyc2VUb3BSaWdodCA9IGZ1bmN0aW9uIHBhcnNlVG9wUmlnaHQoYm91bmRzKSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhib3VuZHMud2lkdGggLyAyIC8gKCgwLCBfVXRpbC5kaXN0YW5jZSkoYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KSAvIDIpKTtcbn07XG5cbnZhciBwYXJzZVNpZGVPckNvcm5lciA9IGZ1bmN0aW9uIHBhcnNlU2lkZU9yQ29ybmVyKHNpZGUsIGJvdW5kcykge1xuICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDAsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICd0byByaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMyAqIE1hdGguUEkgLyAyLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgcmlnaHQnOlxuICAgICAgICBjYXNlICdyaWdodCB0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJICsgcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgdG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSByaWdodCc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0IGJvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCBsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDIgKiBNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20nOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEksIGJvdW5kcyk7XG4gICAgfVxufTtcblxudmFyIHBhcnNlUGVyY2VudGFnZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlQW5nbGUoYW5nbGUsIGJvdW5kcykge1xuICAgIHZhciBfYW5nbGUkc3BsaXQkbWFwID0gYW5nbGUuc3BsaXQoJyAnKS5tYXAocGFyc2VGbG9hdCksXG4gICAgICAgIF9hbmdsZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX2FuZ2xlJHNwbGl0JG1hcCwgMiksXG4gICAgICAgIGxlZnQgPSBfYW5nbGUkc3BsaXQkbWFwMlswXSxcbiAgICAgICAgdG9wID0gX2FuZ2xlJHNwbGl0JG1hcDJbMV07XG5cbiAgICB2YXIgcmF0aW8gPSBsZWZ0IC8gMTAwICogYm91bmRzLndpZHRoIC8gKHRvcCAvIDEwMCAqIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguYXRhbihpc05hTihyYXRpbykgPyAxIDogcmF0aW8pICsgTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG59O1xuXG52YXIgZmluZENvcm5lciA9IGZ1bmN0aW9uIGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCBjbG9zZXN0KSB7XG4gICAgdmFyIGNvcm5lcnMgPSBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogYm91bmRzLmhlaWdodCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogMCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogYm91bmRzLmhlaWdodCB9XTtcblxuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY29ybmVycy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXQsIGNvcm5lcikge1xuICAgICAgICB2YXIgZCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGNvcm5lci54LCB5IC0gY29ybmVyLnkpO1xuICAgICAgICBpZiAoY2xvc2VzdCA/IGQgPCBzdGF0Lm9wdGltdW1EaXN0YW5jZSA6IGQgPiBzdGF0Lm9wdGltdW1EaXN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcHRpbXVtQ29ybmVyOiBjb3JuZXIsXG4gICAgICAgICAgICAgICAgb3B0aW11bURpc3RhbmNlOiBkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgfSwge1xuICAgICAgICBvcHRpbXVtRGlzdGFuY2U6IGNsb3Nlc3QgPyBJbmZpbml0eSA6IC1JbmZpbml0eSxcbiAgICAgICAgb3B0aW11bUNvcm5lcjogbnVsbFxuICAgIH0pLm9wdGltdW1Db3JuZXI7XG59O1xuXG52YXIgY2FsY3VsYXRlUmFkaXVzID0gZnVuY3Rpb24gY2FsY3VsYXRlUmFkaXVzKGV4dGVudCwgc2hhcGUsIGNlbnRlciwgcmFkaXVzLCBib3VuZHMpIHtcbiAgICB2YXIgeCA9IGNlbnRlci54O1xuICAgIHZhciB5ID0gY2VudGVyLnk7XG4gICAgdmFyIHJ4ID0gMDtcbiAgICB2YXIgcnkgPSAwO1xuXG4gICAgc3dpdGNoIChleHRlbnQpIHtcbiAgICAgICAgY2FzZSAnY2xvc2VzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IGV4YWN0bHkgbWVldHMgdGhlIHNpZGUgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIGl0IGV4YWN0bHkgbWVldHMgdGhlIGNsb3Nlc3Qgc2lkZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IHBhc3NlcyB0aHJvdWdoIHRoZSBjb3JuZXIgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0LXJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgY2xvc2VzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWluKCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJjbG9zZXN0LXNpZGVcIilcbiAgICAgICAgICAgICAgICB2YXIgYyA9IE1hdGgubWluKE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIHRydWUpO1xuICAgICAgICAgICAgICAgIHJ4ID0gKDAsIF9VdGlsLmRpc3RhbmNlKShjb3JuZXIueCAtIHgsIChjb3JuZXIueSAtIHkpIC8gYyk7XG4gICAgICAgICAgICAgICAgcnkgPSBjICogcng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1zaWRlLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3Qgc2lkZShzKVxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSwgTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFydGhlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1jb3JuZXIsIGV4Y2VwdCB0aGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIGJhc2VkIG9uIHRoZSBmYXJ0aGVzdCBjb3JuZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgdGhlIGVuZGluZyBzaGFwZSBpcyBnaXZlbiB0aGUgc2FtZSBhc3BlY3QgcmF0aW8gaXQgd291bGQgaGF2ZSBpZiBmYXJ0aGVzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJmYXJ0aGVzdC1zaWRlXCIpXG4gICAgICAgICAgICAgICAgdmFyIF9jID0gTWF0aC5tYXgoTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSkgLyBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHZhciBfY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByeCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoX2Nvcm5lci54IC0geCwgKF9jb3JuZXIueSAtIHkpIC8gX2MpO1xuICAgICAgICAgICAgICAgIHJ5ID0gX2MgKiByeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBwaXhlbCBvciBwZXJjZW50YWdlIHZhbHVlc1xuICAgICAgICAgICAgcnggPSByYWRpdXMueCB8fCAwO1xuICAgICAgICAgICAgcnkgPSByYWRpdXMueSAhPT0gdW5kZWZpbmVkID8gcmFkaXVzLnkgOiByeDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJ4LFxuICAgICAgICB5OiByeVxuICAgIH07XG59O1xuXG52YXIgdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBmdW5jdGlvbiB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncykge1xuICAgIHZhciBzaGFwZSA9ICcnO1xuICAgIHZhciByYWRpdXMgPSAnJztcbiAgICB2YXIgZXh0ZW50ID0gJyc7XG4gICAgdmFyIHBvc2l0aW9uID0gJyc7XG4gICAgdmFyIGlkeCA9IDA7XG5cbiAgICB2YXIgUE9TSVRJT04gPSAvXihsZWZ0fGNlbnRlcnxyaWdodHxcXGQrKD86cHh8cj9lbXwlKT8pKD86XFxzKyh0b3B8Y2VudGVyfGJvdHRvbXxcXGQrKD86cHh8cj9lbXwlKT8pKT8kL2k7XG4gICAgdmFyIFNIQVBFX0FORF9FWFRFTlQgPSAvXihjaXJjbGV8ZWxsaXBzZSk/XFxzKihjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXJ8Y29udGFpbnxjb3Zlcik/JC9pO1xuICAgIHZhciBSQURJVVMgPSAvXlxcZCsocHh8cj9lbXwlKT8oPzpcXHMrXFxkKyhweHxyP2VtfCUpPyk/JC9pO1xuXG4gICAgdmFyIG1hdGNoU3RhcnRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XG4gICAgaWYgKG1hdGNoU3RhcnRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTaGFwZUV4dGVudCA9IGFyZ3NbaWR4XS5tYXRjaChTSEFQRV9BTkRfRVhURU5UKTtcbiAgICBpZiAobWF0Y2hTaGFwZUV4dGVudCkge1xuICAgICAgICBzaGFwZSA9IG1hdGNoU2hhcGVFeHRlbnRbMV0gfHwgJyc7XG4gICAgICAgIGV4dGVudCA9IG1hdGNoU2hhcGVFeHRlbnRbMl0gfHwgJyc7XG4gICAgICAgIGlmIChleHRlbnQgPT09ICdjb250YWluJykge1xuICAgICAgICAgICAgZXh0ZW50ID0gJ2Nsb3Nlc3Qtc2lkZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0ZW50ID09PSAnY292ZXInKSB7XG4gICAgICAgICAgICBleHRlbnQgPSAnZmFydGhlc3QtY29ybmVyJztcbiAgICAgICAgfVxuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTdGFydFJhZGl1cyA9IGFyZ3NbaWR4XS5tYXRjaChSQURJVVMpO1xuICAgIGlmIChtYXRjaFN0YXJ0UmFkaXVzKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaEVuZFBvc2l0aW9uID0gYXJnc1tpZHhdLm1hdGNoKFBPU0lUSU9OKTtcbiAgICBpZiAobWF0Y2hFbmRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hFbmRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcbiAgICBpZiAobWF0Y2hFbmRSYWRpdXMpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoUG9zaXRpb24gPSBtYXRjaEVuZFBvc2l0aW9uIHx8IG1hdGNoU3RhcnRQb3NpdGlvbjtcbiAgICBpZiAobWF0Y2hQb3NpdGlvbiAmJiBtYXRjaFBvc2l0aW9uWzFdKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbWF0Y2hQb3NpdGlvblsxXSArICgvXlxcZCskLy50ZXN0KG1hdGNoUG9zaXRpb25bMV0pID8gJ3B4JyA6ICcnKTtcbiAgICAgICAgaWYgKG1hdGNoUG9zaXRpb25bMl0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9ICcgJyArIG1hdGNoUG9zaXRpb25bMl0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzJdKSA/ICdweCcgOiAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hSYWRpdXMgPSBtYXRjaEVuZFJhZGl1cyB8fCBtYXRjaFN0YXJ0UmFkaXVzO1xuICAgIGlmIChtYXRjaFJhZGl1cykge1xuICAgICAgICByYWRpdXMgPSBtYXRjaFJhZGl1c1swXTtcbiAgICAgICAgaWYgKCFtYXRjaFJhZGl1c1sxXSkge1xuICAgICAgICAgICAgcmFkaXVzICs9ICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gJiYgIXNoYXBlICYmICFyYWRpdXMgJiYgIWV4dGVudCkge1xuICAgICAgICByYWRpdXMgPSBwb3NpdGlvbjtcbiAgICAgICAgcG9zaXRpb24gPSAnJztcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSAnYXQgJyArIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBbW3NoYXBlLCBleHRlbnQsIHJhZGl1cywgcG9zaXRpb25dLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gISFzO1xuICAgIH0pLmpvaW4oJyAnKV0uY29uY2F0KGFyZ3Muc2xpY2UoaWR4KSk7XG59O1xuXG52YXIgdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzID0gZnVuY3Rpb24gdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3MpIHtcbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjb2xvci5tYXRjaChGUk9NX1RPX0NPTE9SU1RPUCk7XG4gICAgfSlcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgLm1hcChmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHZbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zyb20nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAwJSc7XG4gICAgICAgICAgICBjYXNlICd0byc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnIDEwMCUnO1xuICAgICAgICAgICAgY2FzZSAnY29sb3Itc3RvcCc6XG4gICAgICAgICAgICAgICAgaWYgKHZbM10gPT09ICclJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgJyArIHZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgcGFyc2VGbG9hdCh2WzJdKSAqIDEwMCArICclJztcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVmb3JtYXRJbnB1dEJvdW5kcyA9IGV4cG9ydHMuaW5saW5lU2VsZWN0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9DT0xPUiA9IHVuZGVmaW5lZDtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gcmVxdWlyZSgnLi9UZXh0Q29udGFpbmVyJyk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JhY2tncm91bmQnKTtcblxudmFyIF9ib3JkZXIgPSByZXF1aXJlKCcuL3BhcnNpbmcvYm9yZGVyJyk7XG5cbnZhciBfQ2lyY2xlID0gcmVxdWlyZSgnLi9kcmF3aW5nL0NpcmNsZScpO1xuXG52YXIgX0NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaXJjbGUpO1xuXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4vZHJhd2luZy9WZWN0b3InKTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xuXG52YXIgX1RleHRCb3VuZHMgPSByZXF1aXJlKCcuL1RleHRCb3VuZHMnKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJTlBVVF9DT0xPUiA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFs0MiwgNDIsIDQyXSk7XG52YXIgSU5QVVRfQk9SREVSX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMTY1LCAxNjUsIDE2NV0pO1xudmFyIElOUFVUX0JBQ0tHUk9VTkRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFsyMjIsIDIyMiwgMjIyXSk7XG52YXIgSU5QVVRfQk9SREVSID0ge1xuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlckNvbG9yOiBJTlBVVF9CT1JERVJfQ09MT1IsXG4gICAgYm9yZGVyU3R5bGU6IF9ib3JkZXIuQk9SREVSX1NUWUxFLlNPTElEXG59O1xudmFyIElOUFVUX0JPUkRFUlMgPSBleHBvcnRzLklOUFVUX0JPUkRFUlMgPSBbSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSXTtcbnZhciBJTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogSU5QVVRfQkFDS0dST1VORF9DT0xPUixcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFtdLFxuICAgIGJhY2tncm91bmRDbGlwOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1gsXG4gICAgYmFja2dyb3VuZE9yaWdpbjogX2JhY2tncm91bmQuQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1hcbn07XG5cbnZhciBSQURJT19CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzUwJScpO1xudmFyIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUgPSBbUkFESU9fQk9SREVSX1JBRElVUywgUkFESU9fQk9SREVSX1JBRElVU107XG52YXIgSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA9IFtSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFXTtcblxudmFyIENIRUNLQk9YX0JPUkRFUl9SQURJVVMgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnM3B4Jyk7XG52YXIgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTXTtcbnZhciBJTlBVVF9DSEVDS0JPWF9CT1JERVJfUkFESVVTID0gW0NIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEVdO1xuXG52YXIgZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0SW5wdXRCb3JkZXJSYWRpdXMobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdyYWRpbycgPyBJTlBVVF9SQURJT19CT1JERVJfUkFESVVTIDogSU5QVVRfQ0hFQ0tCT1hfQk9SREVSX1JBRElVUztcbn07XG5cbnZhciBpbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmlubGluZUlucHV0RWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUlucHV0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAncmFkaW8nIHx8IG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAobm9kZS5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IE1hdGgubWluKGNvbnRhaW5lci5ib3VuZHMud2lkdGgsIGNvbnRhaW5lci5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2gobm9kZS50eXBlID09PSAnY2hlY2tib3gnID8gW25ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5MzYzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjc5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMTYsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTU0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjI3MzQ3LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjQ0MDcxKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzk2OTQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTY0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjcyOTgzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjIzKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuODQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuMzQwODUpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSldIDogbmV3IF9DaXJjbGUyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAvIDQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAvIDQsIHNpemUgLyA0KSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmxpbmVGb3JtRWxlbWVudChnZXRJbnB1dFZhbHVlKG5vZGUpLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbiAgICB9XG59O1xuXG52YXIgaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVUZXh0QXJlYUVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgaW5saW5lRm9ybUVsZW1lbnQobm9kZS52YWx1ZSwgbm9kZSwgY29udGFpbmVyLCB0cnVlKTtcbn07XG5cbnZhciBpbmxpbmVTZWxlY3RFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVTZWxlY3RFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lU2VsZWN0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICB2YXIgb3B0aW9uID0gbm9kZS5vcHRpb25zW25vZGUuc2VsZWN0ZWRJbmRleCB8fCAwXTtcbiAgICBpbmxpbmVGb3JtRWxlbWVudChvcHRpb24gPyBvcHRpb24udGV4dCB8fCAnJyA6ICcnLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbn07XG5cbnZhciByZWZvcm1hdElucHV0Qm91bmRzID0gZXhwb3J0cy5yZWZvcm1hdElucHV0Qm91bmRzID0gZnVuY3Rpb24gcmVmb3JtYXRJbnB1dEJvdW5kcyhib3VuZHMpIHtcbiAgICBpZiAoYm91bmRzLndpZHRoID4gYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMubGVmdCArPSAoYm91bmRzLndpZHRoIC0gYm91bmRzLmhlaWdodCkgLyAyO1xuICAgICAgICBib3VuZHMud2lkdGggPSBib3VuZHMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYm91bmRzLndpZHRoIDwgYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMudG9wICs9IChib3VuZHMuaGVpZ2h0IC0gYm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBib3VuZHMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBib3VuZHM7XG59O1xuXG52YXIgaW5saW5lRm9ybUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVGb3JtRWxlbWVudCh2YWx1ZSwgbm9kZSwgY29udGFpbmVyLCBhbGxvd0xpbmVicmVhaykge1xuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDAgJiYgYm9keSkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLCB3cmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGNvbnRhaW5lci5ib3VuZHMubGVmdCArICdweCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICBpZiAoIWFsbG93TGluZWJyZWFrKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dCA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgIH1cbn07XG5cbnZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gbm9kZS50eXBlID09PSAncGFzc3dvcmQnID8gbmV3IEFycmF5KG5vZGUudmFsdWUubGVuZ3RoICsgMSkuam9pbignXFx1MjAyMicpIDogbm9kZS52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgPyBub2RlLnBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMRU5HVEhfV0lUSF9VTklUID0gLyhbXFxkLl0rKShweHxyP2VtfCUpL2k7XG5cbnZhciBMRU5HVEhfVFlQRSA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB7XG4gICAgUFg6IDAsXG4gICAgUEVSQ0VOVEFHRTogMVxufTtcblxudmFyIExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZW5ndGgodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExlbmd0aCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWUuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpID09PSAnJScgPyBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFIDogTEVOR1RIX1RZUEUuUFg7XG4gICAgICAgIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdmFsdWUgZ2l2ZW4gZm9yIExlbmd0aDogXCInICsgdmFsdWUgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gaXNOYU4ocGFyc2VkVmFsdWUpID8gMCA6IHBhcnNlZFZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMZW5ndGgsIFt7XG4gICAgICAgIGtleTogJ2lzUGVyY2VudGFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRBYnNvbHV0ZVZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFic29sdXRlVmFsdWUocGFyZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1BlcmNlbnRhZ2UoKSA/IHBhcmVudExlbmd0aCAqICh0aGlzLnZhbHVlIC8gMTAwKSA6IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSh2KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCh2KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMZW5ndGg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExlbmd0aDtcblxuXG52YXIgZ2V0Um9vdEZvbnRTaXplID0gZnVuY3Rpb24gZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRSb290Rm9udFNpemUocGFyZW50KSA6IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpO1xufTtcblxudmFyIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0ID0gZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KGNvbnRhaW5lciwgdmFsdWUsIHVuaXQpIHtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAncHgnOlxuICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKHZhbHVlICsgdW5pdCk7XG4gICAgICAgIGNhc2UgJ2VtJzpcbiAgICAgICAgY2FzZSAncmVtJzpcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXcgTGVuZ3RoKHZhbHVlKTtcbiAgICAgICAgICAgIGxlbmd0aC52YWx1ZSAqPSB1bml0ID09PSAnZW0nID8gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGUuZm9udC5mb250U2l6ZSkgOiBnZXRSb290Rm9udFNpemUoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgY29ycmVjdGx5IGlmIHVua25vd24gdW5pdCBpcyB1c2VkXG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCgnMCcpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmdldExpc3RPd25lciA9IHVuZGVmaW5lZDtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgX1VuaWNvZGUgPSByZXF1aXJlKCcuL1VuaWNvZGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gTWFyZ2luIGJldHdlZW4gdGhlIGVudW1lcmF0aW9uIGFuZCB0aGUgbGlzdCBpdGVtIGNvbnRlbnRcbnZhciBNQVJHSU5fUklHSFQgPSA3O1xuXG52YXIgYW5jZXN0b3JUeXBlcyA9IFsnT0wnLCAnVUwnLCAnTUVOVSddO1xuXG52YXIgZ2V0TGlzdE93bmVyID0gZXhwb3J0cy5nZXRMaXN0T3duZXIgPSBmdW5jdGlvbiBnZXRMaXN0T3duZXIoY29udGFpbmVyKSB7XG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZG8ge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9IGFuY2VzdG9yVHlwZXMuaW5kZXhPZihwYXJlbnQudGFnTmFtZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH0gd2hpbGUgKHBhcmVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyLnBhcmVudDtcbn07XG5cbnZhciBpbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmlubGluZUxpc3RJdGVtRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUxpc3RJdGVtRWxlbWVudChub2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgdmFyIGxpc3RTdHlsZSA9IGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGU7XG5cbiAgICBpZiAoIWxpc3RTdHlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCB3cmFwcGVyKTtcblxuICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgd3JhcHBlci5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XG5cbiAgICBzd2l0Y2ggKGxpc3RTdHlsZS5saXN0U3R5bGVQb3NpdGlvbikge1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFOlxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoIC0gY29udGFpbmVyLmJvdW5kcy5sZWZ0IC0gY29udGFpbmVyLnN0eWxlLm1hcmdpblsxXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpICsgTUFSR0lOX1JJR0hUICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5JTlNJREU6XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgLSBjb250YWluZXIuc3R5bGUubWFyZ2luWzNdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSB2b2lkIDA7XG4gICAgdmFyIE1BUkdJTl9UT1AgPSBjb250YWluZXIuc3R5bGUubWFyZ2luWzBdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHN0eWxlSW1hZ2UgPSBsaXN0U3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgaWYgKHN0eWxlSW1hZ2UpIHtcbiAgICAgICAgaWYgKHN0eWxlSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGltYWdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3R5bGVJbWFnZS5hcmdzWzBdO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpICogMC41O1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyBjb250YWluZXIuYm91bmRzLmhlaWdodCAtIDEuNSAqIHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250YWluZXIubGlzdEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0ZXh0ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNyZWF0ZUNvdW50ZXJUZXh0KGNvbnRhaW5lci5saXN0SW5kZXgsIGxpc3RTdHlsZS5saXN0U3R5bGVUeXBlLCB0cnVlKSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcbiAgICB9XG5cbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdmFyIGJvZHkgPSBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUodGV4dCwgY29udGFpbmVyKSk7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdCh3cmFwcGVyLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyLCAwKSk7XG4gICAgfVxufTtcblxudmFyIFJPTUFOX1VQUEVSID0ge1xuICAgIGludGVnZXJzOiBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV0sXG4gICAgdmFsdWVzOiBbJ00nLCAnQ00nLCAnRCcsICdDRCcsICdDJywgJ1hDJywgJ0wnLCAnWEwnLCAnWCcsICdJWCcsICdWJywgJ0lWJywgJ0knXVxufTtcblxudmFyIEFSTUVOSUFOID0ge1xuICAgIGludGVnZXJzOiBbOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ9WUJywgJ9WTJywgJ9WSJywgJ9WRJywgJ9WQJywgJ9WPJywgJ9WOJywgJ9WNJywgJ9WMJywgJ9WLJywgJ9WKJywgJ9WJJywgJ9WIJywgJ9WHJywgJ9WGJywgJ9WFJywgJ9WEJywgJ9WDJywgJ9WCJywgJ9WBJywgJ9WAJywgJ9S/JywgJ9S+JywgJ9S9JywgJ9S8JywgJ9S7JywgJ9S6JywgJ9S5JywgJ9S4JywgJ9S3JywgJ9S2JywgJ9S1JywgJ9S0JywgJ9SzJywgJ9SyJywgJ9SxJ11cbn07XG5cbnZhciBIRUJSRVcgPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDE5LCAxOCwgMTcsIDE2LCAxNSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfXmdezJywgJ9eY17MnLCAn15fXsycsICfXltezJywgJ9eV17MnLCAn15TXsycsICfXk9ezJywgJ9eS17MnLCAn15HXsycsICfXkNezJywgJ9eqJywgJ9epJywgJ9eoJywgJ9enJywgJ9emJywgJ9ekJywgJ9eiJywgJ9ehJywgJ9egJywgJ9eeJywgJ9ecJywgJ9ebJywgJ9eZ15gnLCAn15nXlycsICfXmdeWJywgJ9eY15YnLCAn15jXlScsICfXmScsICfXmCcsICfXlycsICfXlicsICfXlScsICfXlCcsICfXkycsICfXkicsICfXkScsICfXkCddXG59O1xuXG52YXIgR0VPUkdJQU4gPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ+GDtScsICfhg7AnLCAn4YOvJywgJ+GDtCcsICfhg64nLCAn4YOtJywgJ+GDrCcsICfhg6snLCAn4YOqJywgJ+GDqScsICfhg6gnLCAn4YOnJywgJ+GDpicsICfhg6UnLCAn4YOkJywgJ+GDsycsICfhg6InLCAn4YOhJywgJ+GDoCcsICfhg58nLCAn4YOeJywgJ+GDnScsICfhg7InLCAn4YOcJywgJ+GDmycsICfhg5onLCAn4YOZJywgJ+GDmCcsICfhg5cnLCAn4YOxJywgJ+GDlicsICfhg5UnLCAn4YOUJywgJ+GDkycsICfhg5InLCAn4YORJywgJ+GDkCddXG59O1xuXG52YXIgY3JlYXRlQWRkaXRpdmVDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCBtaW4sIG1heCwgc3ltYm9scywgZmFsbGJhY2ssIHN1ZmZpeCkge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIGZhbGxiYWNrLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN5bWJvbHMuaW50ZWdlcnMucmVkdWNlKGZ1bmN0aW9uIChzdHJpbmcsIGludGVnZXIsIGluZGV4KSB7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBpbnRlZ2VyKSB7XG4gICAgICAgICAgICB2YWx1ZSAtPSBpbnRlZ2VyO1xuICAgICAgICAgICAgc3RyaW5nICs9IHN5bWJvbHMudmFsdWVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKSArIHN1ZmZpeDtcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIodmFsdWUsIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBpc051bWVyaWMsIHJlc29sdmVyKSB7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYykge1xuICAgICAgICAgICAgdmFsdWUtLTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgPSByZXNvbHZlcih2YWx1ZSkgKyBzdHJpbmc7XG4gICAgICAgIHZhbHVlIC89IGNvZGVQb2ludFJhbmdlTGVuZ3RoO1xuICAgIH0gd2hpbGUgKHZhbHVlICogY29kZVBvaW50UmFuZ2VMZW5ndGggPj0gY29kZVBvaW50UmFuZ2VMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIGNvZGVQb2ludFJhbmdlU3RhcnQsIGNvZGVQb2ludFJhbmdlRW5kLCBpc051bWVyaWMsIHN1ZmZpeCkge1xuICAgIHZhciBjb2RlUG9pbnRSYW5nZUxlbmd0aCA9IGNvZGVQb2ludFJhbmdlRW5kIC0gY29kZVBvaW50UmFuZ2VTdGFydCArIDE7XG5cbiAgICByZXR1cm4gKHZhbHVlIDwgMCA/ICctJyA6ICcnKSArIChjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIoTWF0aC5hYnModmFsdWUpLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiAoMCwgX1VuaWNvZGUuZnJvbUNvZGVQb2ludCkoTWF0aC5mbG9vcihjb2RlUG9pbnQgJSBjb2RlUG9pbnRSYW5nZUxlbmd0aCkgKyBjb2RlUG9pbnRSYW5nZVN0YXJ0KTtcbiAgICB9KSArIHN1ZmZpeCk7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHMgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgc3ltYm9scykge1xuICAgIHZhciBzdWZmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuICc7XG5cbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBzeW1ib2xzLmxlbmd0aDtcbiAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKE1hdGguYWJzKHZhbHVlKSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGZhbHNlLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xzW01hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpXTtcbiAgICB9KSArIHN1ZmZpeDtcbn07XG5cbnZhciBDSktfWkVST1MgPSAxIDw8IDA7XG52YXIgQ0pLX1RFTl9DT0VGRklDSUVOVFMgPSAxIDw8IDE7XG52YXIgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyA9IDEgPDwgMjtcbnZhciBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMgPSAxIDw8IDM7XG5cbnZhciBjcmVhdGVDSktDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgbnVtYmVycywgbXVsdGlwbGllcnMsIG5lZ2F0aXZlU2lnbiwgc3VmZml4LCBmbGFncykge1xuICAgIGlmICh2YWx1ZSA8IC05OTk5IHx8IHZhbHVlID4gOTk5OSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIHZhciB0bXAgPSBNYXRoLmFicyh2YWx1ZSk7XG4gICAgdmFyIHN0cmluZyA9IHN1ZmZpeDtcblxuICAgIGlmICh0bXAgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcnNbMF0gKyBzdHJpbmc7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZGlnaXQgPSAwOyB0bXAgPiAwICYmIGRpZ2l0IDw9IDQ7IGRpZ2l0KyspIHtcbiAgICAgICAgdmFyIGNvZWZmaWNpZW50ID0gdG1wICUgMTA7XG5cbiAgICAgICAgaWYgKGNvZWZmaWNpZW50ID09PSAwICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19aRVJPUykgJiYgc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPiAxIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAwIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19URU5fQ09FRkZJQ0lFTlRTKSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKSAmJiB2YWx1ZSA+IDEwMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKSkge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyAoZGlnaXQgPiAwID8gbXVsdGlwbGllcnNbZGlnaXQgLSAxXSA6ICcnKSArIHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDApIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gKyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdG1wID0gTWF0aC5mbG9vcih0bXAgLyAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh2YWx1ZSA8IDAgPyBuZWdhdGl2ZVNpZ24gOiAnJykgKyBzdHJpbmc7XG59O1xuXG52YXIgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUyA9ICfljYHnmb7ljYPokKwnO1xudmFyIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTID0gJ+aLvuS9sOS7n+iQrCc7XG52YXIgSkFQQU5FU0VfTkVHQVRJVkUgPSAn44Oe44Kk44OK44K5JztcbnZhciBLT1JFQU5fTkVHQVRJVkUgPSAn66eI7J2064SI7IqkICc7XG5cbnZhciBjcmVhdGVDb3VudGVyVGV4dCA9IGV4cG9ydHMuY3JlYXRlQ291bnRlclRleHQgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgdHlwZSwgYXBwZW5kU3VmZml4KSB7XG4gICAgdmFyIGRlZmF1bHRTdWZmaXggPSBhcHBlbmRTdWZmaXggPyAnLiAnIDogJyc7XG4gICAgdmFyIGNqa1N1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICfjgIEnIDogJyc7XG4gICAgdmFyIGtvcmVhblN1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICcsICcgOiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ESVNDOlxuICAgICAgICAgICAgcmV0dXJuICfigKInO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNJUkNMRTpcbiAgICAgICAgICAgIHJldHVybiAn4pemJztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TUVVBUkU6XG4gICAgICAgICAgICByZXR1cm4gJ+KXvic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk86XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA0OCwgNTcsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGggPCA0ID8gJzAnICsgc3RyaW5nIDogc3RyaW5nO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9ST01BTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMzk5OSwgUk9NQU5fVVBQRVIsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgOTQ1LCA5NjksIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk3LCAxMjIsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDY1LCA5MCwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDE2MzIsIDE2NDEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSTUVOSUFOOlxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQkVOR0FMSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDI1MzQsIDI1NDMsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LSE1FUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDYxMTIsIDYxMjEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+WtkOS4keWvheWNr+i+sOW3s+WNiOacqueUs+mFieaIjOS6pScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0hFQVZFTkxZX1NURU06XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfnlLLkuZnkuJnkuIHmiIrlt7Hluprovpvlo6znmbgnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQzpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LKz5Y+D6IKG5LyN6Zm45p+S5o2M546WJywgQ0hJTkVTRV9GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjuei0sOWPgeiChuS8jemZhuafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCAn5Y2B55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgMCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7HlvJDlj4Llm5vkvI3lha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOR1VMX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn7JiB7J287J207IK87IKs7Jik7Jyh7Lmg7YyU6rWsJywgJ+yLreuwseyynOunjCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+iQrCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCAwKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7nosrPlj4Plm5vkupTlha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2DJywgS09SRUFOX05FR0FUSVZFLCBrb3JlYW5TdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVWQU5BR0FSSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4OTY2LCAweDk2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR0VPUkdJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAxOTk5OSwgR0VPUkdJQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhhZTYsIDB4YWVmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HVVJNVUtISTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YTY2LCAweGE2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSEVCUkVXOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTA5OTksIEhFQlJFVywgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgYLjgYTjgYbjgYjjgYrjgYvjgY3jgY/jgZHjgZPjgZXjgZfjgZnjgZvjgZ3jgZ/jgaHjgaTjgabjgajjgarjgavjgazjga3jga7jga/jgbLjgbXjgbjjgbvjgb7jgb/jgoDjgoHjgoLjgoTjgobjgojjgonjgorjgovjgozjgo3jgo/jgpDjgpHjgpLjgpMnKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBhOOCjeOBr+OBq+OBu+OBuOOBqOOBoeOCiuOBrOOCi+OCkuOCj+OBi+OCiOOBn+OCjOOBneOBpOOBreOBquOCieOCgOOBhuOCkOOBruOBiuOBj+OChOOBvuOBkeOBteOBk+OBiOOBpuOBguOBleOBjeOChuOCgeOBv+OBl+OCkeOBsuOCguOBm+OBmScpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBTk5BREE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGNlNiwgMHhjZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44Kz44K144K344K544K744K944K/44OB44OE44OG44OI44OK44OL44OM44ON44OO44OP44OS44OV44OY44Ob44Oe44Of44Og44Oh44Oi44Ok44Om44Oo44Op44Oq44Or44Os44Ot44Ov44Ow44Ox44Oy44OzJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCpOODreODj+ODi+ODm+ODmOODiOODgeODquODjOODq+ODsuODr+OCq+ODqOOCv+ODrOOCveODhOODjeODiuODqeODoOOCpuODsOODjuOCquOCr+ODpOODnuOCseODleOCs+OCqOODhuOCouOCteOCreODpuODoeODn+OCt+ODseODkuODouOCu+OCuScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTEFPOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhlZDAsIDB4ZWQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDE4MTAsIDB4MTgxOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTA0MCwgMHgxMDQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5PUklZQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YjY2LCAweGI2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4NmYwLCAweDZmOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEFNSUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGJlNiwgMHhiZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRFTFVHVTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YzY2LCAweGM2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEhBSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZTUwLCAweGU1OSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVElCRVRBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZjIwLCAweGYyOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIoZW5hYmxlZCwgaWQsIHN0YXJ0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2dnZXIpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCA/IHN0YXJ0IDogRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2dnZXIsIFt7XG4gICAgICAgIGtleTogJ2NoaWxkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoaWxkKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmVuYWJsZWQsIGlkLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkICYmIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5sb2csIHdpbmRvdy5jb25zb2xlKS5hcHBseSh3aW5kb3cuY29uc29sZSwgW0RhdGUubm93KCkgLSB0aGlzLnN0YXJ0ICsgJ21zJywgdGhpcy5pZCA/ICdodG1sMmNhbnZhcyAoJyArIHRoaXMuaWQgKyAnKTonIDogJ2h0bWwyY2FudmFzOiddLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5lcnJvciwgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMb2dnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG52YXIgX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3BhcnNpbmcvYmFja2dyb3VuZCcpO1xuXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcblxudmFyIF9ib3JkZXJSYWRpdXMgPSByZXF1aXJlKCcuL3BhcnNpbmcvYm9yZGVyUmFkaXVzJyk7XG5cbnZhciBfZGlzcGxheSA9IHJlcXVpcmUoJy4vcGFyc2luZy9kaXNwbGF5Jyk7XG5cbnZhciBfZmxvYXQgPSByZXF1aXJlKCcuL3BhcnNpbmcvZmxvYXQnKTtcblxudmFyIF9mb250ID0gcmVxdWlyZSgnLi9wYXJzaW5nL2ZvbnQnKTtcblxudmFyIF9sZXR0ZXJTcGFjaW5nID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xldHRlclNwYWNpbmcnKTtcblxudmFyIF9saW5lQnJlYWsgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGluZUJyZWFrJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgX21hcmdpbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9tYXJnaW4nKTtcblxudmFyIF9vdmVyZmxvdyA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvdycpO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvd1dyYXAnKTtcblxudmFyIF9wYWRkaW5nID0gcmVxdWlyZSgnLi9wYXJzaW5nL3BhZGRpbmcnKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9wb3NpdGlvbicpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RleHREZWNvcmF0aW9uJyk7XG5cbnZhciBfdGV4dFNoYWRvdyA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0U2hhZG93Jyk7XG5cbnZhciBfdGV4dFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0VHJhbnNmb3JtJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RyYW5zZm9ybScpO1xuXG52YXIgX3Zpc2liaWxpdHkgPSByZXF1aXJlKCcuL3BhcnNpbmcvdmlzaWJpbGl0eScpO1xuXG52YXIgX3dvcmRCcmVhayA9IHJlcXVpcmUoJy4vcGFyc2luZy93b3JkLWJyZWFrJyk7XG5cbnZhciBfekluZGV4ID0gcmVxdWlyZSgnLi9wYXJzaW5nL3pJbmRleCcpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJTlBVVF9UQUdTID0gWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXTtcblxudmFyIE5vZGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUNvbnRhaW5lcihub2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGUuc3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFydCA9IG5vZGUuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgc3R5bGUgPSBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICgwLCBfZGlzcGxheS5wYXJzZURpc3BsYXkpKHN0eWxlLmRpc3BsYXkpO1xuXG4gICAgICAgIHZhciBJU19JTlBVVCA9IG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCc7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9wb3NpdGlvbi5wYXJzZVBvc2l0aW9uKShzdHlsZS5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IElTX0lOUFVUID8gX0lucHV0LklOUFVUX0JBQ0tHUk9VTkQgOiAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kKShzdHlsZSwgcmVzb3VyY2VMb2FkZXIpLFxuICAgICAgICAgICAgYm9yZGVyOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CT1JERVJTIDogKDAsIF9ib3JkZXIucGFyc2VCb3JkZXIpKHN0eWxlKSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogKG5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MSW5wdXRFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiBJU19JTlBVVCA/ICgwLCBfSW5wdXQuZ2V0SW5wdXRCb3JkZXJSYWRpdXMpKG5vZGUpIDogKDAsIF9ib3JkZXJSYWRpdXMucGFyc2VCb3JkZXJSYWRpdXMpKHN0eWxlKSxcbiAgICAgICAgICAgIGNvbG9yOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9DT0xPUiA6IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuY29sb3IpLFxuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgIGZsb2F0OiAoMCwgX2Zsb2F0LnBhcnNlQ1NTRmxvYXQpKHN0eWxlLmZsb2F0KSxcbiAgICAgICAgICAgIGZvbnQ6ICgwLCBfZm9udC5wYXJzZUZvbnQpKHN0eWxlKSxcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICgwLCBfbGV0dGVyU3BhY2luZy5wYXJzZUxldHRlclNwYWNpbmcpKHN0eWxlLmxldHRlclNwYWNpbmcpLFxuICAgICAgICAgICAgbGlzdFN0eWxlOiBkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSA/ICgwLCBfbGlzdFN0eWxlLnBhcnNlTGlzdFN0eWxlKShzdHlsZSkgOiBudWxsLFxuICAgICAgICAgICAgbGluZUJyZWFrOiAoMCwgX2xpbmVCcmVhay5wYXJzZUxpbmVCcmVhaykoc3R5bGUubGluZUJyZWFrKSxcbiAgICAgICAgICAgIG1hcmdpbjogKDAsIF9tYXJnaW4ucGFyc2VNYXJnaW4pKHN0eWxlKSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlRmxvYXQoc3R5bGUub3BhY2l0eSksXG4gICAgICAgICAgICBvdmVyZmxvdzogSU5QVVRfVEFHUy5pbmRleE9mKG5vZGUudGFnTmFtZSkgPT09IC0xID8gKDAsIF9vdmVyZmxvdy5wYXJzZU92ZXJmbG93KShzdHlsZS5vdmVyZmxvdykgOiBfb3ZlcmZsb3cuT1ZFUkZMT1cuSElEREVOLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiAoMCwgX292ZXJmbG93V3JhcC5wYXJzZU92ZXJmbG93V3JhcCkoc3R5bGUub3ZlcmZsb3dXcmFwID8gc3R5bGUub3ZlcmZsb3dXcmFwIDogc3R5bGUud29yZFdyYXApLFxuICAgICAgICAgICAgcGFkZGluZzogKDAsIF9wYWRkaW5nLnBhcnNlUGFkZGluZykoc3R5bGUpLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICgwLCBfdGV4dERlY29yYXRpb24ucGFyc2VUZXh0RGVjb3JhdGlvbikoc3R5bGUpLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogKDAsIF90ZXh0U2hhZG93LnBhcnNlVGV4dFNoYWRvdykoc3R5bGUudGV4dFNoYWRvdyksXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAoMCwgX3RleHRUcmFuc2Zvcm0ucGFyc2VUZXh0VHJhbnNmb3JtKShzdHlsZS50ZXh0VHJhbnNmb3JtKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm0ucGFyc2VUcmFuc2Zvcm0pKHN0eWxlKSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICgwLCBfdmlzaWJpbGl0eS5wYXJzZVZpc2liaWxpdHkpKHN0eWxlLnZpc2liaWxpdHkpLFxuICAgICAgICAgICAgd29yZEJyZWFrOiAoMCwgX3dvcmRCcmVhay5wYXJzZVdvcmRCcmVhaykoc3R5bGUud29yZEJyZWFrKSxcbiAgICAgICAgICAgIHpJbmRleDogKDAsIF96SW5kZXgucGFyc2VaSW5kZXgpKHBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDID8gc3R5bGUuekluZGV4IDogJ2F1dG8nKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNmb3JtZWQoKSkge1xuICAgICAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHByb3ZpZGVzIHZhbHVlcyBwb3N0LXRyYW5zZm9ybSwgd2Ugd2FudCB0aGVtIHdpdGhvdXQgdGhlIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwwLDAsMSwwLDApJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSkge1xuICAgICAgICAgICAgdmFyIGxpc3RPd25lciA9ICgwLCBfTGlzdEl0ZW0uZ2V0TGlzdE93bmVyKSh0aGlzKTtcbiAgICAgICAgICAgIGlmIChsaXN0T3duZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEluZGV4ID0gbGlzdE93bmVyLmxpc3RJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGlzdE93bmVyLmxpc3RJdGVtcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEluZGV4ID0gbm9kZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgJiYgdHlwZW9mIG5vZGUudmFsdWUgPT09ICdudW1iZXInID8gbm9kZS52YWx1ZSA6IGxpc3RJbmRleCA9PT0gMCA/IHR5cGVvZiBsaXN0T3duZXIubGlzdFN0YXJ0ID09PSAnbnVtYmVyJyA/IGxpc3RPd25lci5saXN0U3RhcnQgOiAxIDogbGlzdE93bmVyLmxpc3RJdGVtc1tsaXN0SW5kZXggLSAxXS5saXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBtb3ZlIGJvdW5kIHJldHJpZXZhbCBmb3IgYWxsIG5vZGVzIHRvIGEgbGF0ZXIgc3RhZ2U/XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnZlZEJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRDdXJ2ZXMpKF90aGlzLmJvdW5kcywgX3RoaXMuc3R5bGUuYm9yZGVyLCBfdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZSA9IGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBJU19JTlBVVCA/ICgwLCBfSW5wdXQucmVmb3JtYXRJbnB1dEJvdW5kcykoKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgdGhpcy5jdXJ2ZWRCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kQ3VydmVzKSh0aGlzLmJvdW5kcywgdGhpcy5zdHlsZS5ib3JkZXIsIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJycgKyBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArIChub2RlLmlkID8gJyMnICsgbm9kZS5pZCA6ICcnKSArIG5vZGUuY2xhc3NOYW1lLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPyAnLicgKyBzIDogJyc7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhOb2RlQ29udGFpbmVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRDbGlwUGF0aHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xpcFBhdGhzKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudENsaXBzID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xuICAgICAgICAgICAgdmFyIGlzQ2xpcHBlZCA9IHRoaXMuc3R5bGUub3ZlcmZsb3cgIT09IF9vdmVyZmxvdy5PVkVSRkxPVy5WSVNJQkxFO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNDbGlwcGVkID8gcGFyZW50Q2xpcHMuY29uY2F0KFsoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkodGhpcy5jdXJ2ZWRCb3VuZHMpXSkgOiBwYXJlbnRDbGlwcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbkZsb3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbkZsb3coKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3RFbGVtZW50KCkgJiYgIXRoaXMuaXNGbG9hdGluZygpICYmICF0aGlzLmlzQWJzb2x1dGVseVBvc2l0aW9uZWQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNWaXNpYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuTk9ORSkgJiYgdGhpcy5zdHlsZS5vcGFjaXR5ID4gMCAmJiB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPT09IF92aXNpYmlsaXR5LlZJU0lCSUxJVFkuVklTSUJMRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Fic29sdXRlbHlQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUMgJiYgdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlJFTEFUSVZFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Bvc2l0aW9uZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRmxvYXRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGbG9hdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLmZsb2F0ICE9PSBfZmxvYXQuRkxPQVQuTk9ORTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNSb290RWxlbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Jvb3RFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID09PSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1RyYW5zZm9ybWVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS50cmFuc2Zvcm0gIT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUG9zaXRpb25lZFdpdGhaSW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpb25lZCgpICYmICF0aGlzLnN0eWxlLnpJbmRleC5hdXRvO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0lubGluZUxldmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5saW5lTGV2ZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfQkxPQ0spIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9GTEVYKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfR1JJRCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0xJU1RfSVRFTSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX1RBQkxFKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfVEFCTEUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE5vZGVDb250YWluZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vZGVDb250YWluZXI7XG5cblxudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2Uobm9kZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdTVkdFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSB7XG4gICAgICAgIHZhciBzID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZSgnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5zZXJpYWxpemVUb1N0cmluZyhub2RlKSkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTUcnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGltZyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmMpO1xuICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZENhbnZhcyhjYW52YXMpO1xuICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknKTtcbiAgICAgICAgICAgIGlmIChpZnJhbWVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ob2RlUGFyc2VyID0gdW5kZWZpbmVkO1xuXG52YXIgX1N0YWNraW5nQ29udGV4dCA9IHJlcXVpcmUoJy4vU3RhY2tpbmdDb250ZXh0Jyk7XG5cbnZhciBfU3RhY2tpbmdDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YWNraW5nQ29udGV4dCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTm9kZVBhcnNlciA9IGV4cG9ydHMuTm9kZVBhcnNlciA9IGZ1bmN0aW9uIE5vZGVQYXJzZXIobm9kZSwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ1N0YXJ0aW5nIG5vZGUgcGFyc2luZycpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KG5vZGUsIG51bGwsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICB2YXIgc3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIG51bGwsIHRydWUpO1xuXG4gICAgcGFyc2VOb2RlVHJlZShub2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcGFyc2luZyBub2RlIHRyZWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG59O1xuXG52YXIgSUdOT1JFRF9OT0RFX05BTUVTID0gWydTQ1JJUFQnLCAnSEVBRCcsICdUSVRMRScsICdPQkpFQ1QnLCAnQlInLCAnT1BUSU9OJ107XG5cbnZhciBwYXJzZU5vZGVUcmVlID0gZnVuY3Rpb24gcGFyc2VOb2RlVHJlZShub2RlLCBwYXJlbnQsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbmRleCA+IDUwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjdXJzaW9uIGVycm9yIHdoaWxlIHBhcnNpbmcgbm9kZSB0cmVlJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY2hpbGROb2RlID0gbm9kZS5maXJzdENoaWxkLCBuZXh0Tm9kZTsgY2hpbGROb2RlOyBjaGlsZE5vZGUgPSBuZXh0Tm9kZSkge1xuICAgICAgICBuZXh0Tm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gY2hpbGROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5UZXh0IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHQgfHwgZGVmYXVsdFZpZXcucGFyZW50ICYmIGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LnBhcmVudC5UZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmRhdGEudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZShjaGlsZE5vZGUsIHBhcmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChJR05PUkVEX05PREVfTkFNRVMuaW5kZXhPZihjaGlsZE5vZGUubm9kZU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVJbnB1dEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVUZXh0QXJlYUVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lU2VsZWN0RWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUgJiYgY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZS5saXN0U3R5bGVUeXBlICE9PSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5OT05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0xpc3RJdGVtLmlubGluZUxpc3RJdGVtRWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4gPSBjaGlsZE5vZGUudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQ6ZmFsc2UsIGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdGFjayA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkU3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIHBhcmVudFN0YWNrLCB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdGFjay5jb250ZXh0cy5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlTm9kZVRyZWUoY2hpbGROb2RlLCBjb250YWluZXIsIGNoaWxkU3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuU1ZHU1ZHRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF9jb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgIHZhciBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChfY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgaWYgKF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KF9jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dFxuICAgICAgICAgICAgICAgIHZhciBfcGFyZW50U3RhY2sgPSBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgX2NvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgIHZhciBfY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KF9jb250YWluZXIsIF9wYXJlbnRTdGFjaywgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBfcGFyZW50U3RhY2suY29udGV4dHMucHVzaChfY2hpbGRTdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goX2NvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIG5vZGUpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUm9vdEVsZW1lbnQoKSB8fCBjb250YWluZXIuaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHx8IGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpIHx8IGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKTtcbn07XG5cbnZhciBjcmVhdGVzU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNvbnRhaW5lci5pc0Zsb2F0aW5nKCk7XG59O1xuXG52YXIgaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdCA9IGZ1bmN0aW9uIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgPT09ICdCT0RZJyAmJiBjb250YWluZXIucGFyZW50IGluc3RhbmNlb2YgX05vZGVDb250YWluZXIyLmRlZmF1bHQgJiYgY29udGFpbmVyLnBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Qcm94eSA9IHVuZGVmaW5lZDtcblxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFByb3h5ID0gZXhwb3J0cy5Qcm94eSA9IGZ1bmN0aW9uIFByb3h5KHNyYywgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wcm94eSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdObyBwcm94eSBkZWZpbmVkJyA6IG51bGwpO1xuICAgIH1cbiAgICB2YXIgcHJveHkgPSBvcHRpb25zLnByb3h5O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SRVNQT05TRV9UWVBFID8gJ2Jsb2InIDogJ3RleHQnO1xuICAgICAgICB2YXIgeGhyID0gX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX1hIUiA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdGYWlsZWQgdG8gcHJveHkgcmVzb3VyY2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyA6ICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwcm94eSArICc/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3JjKSArICcmcmVzcG9uc2VUeXBlPScgKyByZXNwb25zZVR5cGUpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgIT09ICd0ZXh0JyAmJiB4aHIgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIHByb3h5aW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQ29udGVudCA9IGV4cG9ydHMucmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGV4cG9ydHMuVE9LRU5fVFlQRSA9IGV4cG9ydHMuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB7XG4gICAgVEVYVDogMCxcbiAgICBJTUFHRTogMVxufTtcblxudmFyIFRPS0VOX1RZUEUgPSBleHBvcnRzLlRPS0VOX1RZUEUgPSB7XG4gICAgU1RSSU5HOiAwLFxuICAgIEFUVFJJQlVURTogMSxcbiAgICBVUkw6IDIsXG4gICAgQ09VTlRFUjogMyxcbiAgICBDT1VOVEVSUzogNCxcbiAgICBPUEVOUVVPVEU6IDUsXG4gICAgQ0xPU0VRVU9URTogNlxufTtcblxudmFyIHBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGZ1bmN0aW9uIHBhcnNlQ291bnRlclJlc2V0KHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY291bnRlclJlc2V0IHx8IHN0eWxlLmNvdW50ZXJSZXNldCA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgY291bnRlck5hbWVzID0gW107XG4gICAgdmFyIGNvdW50ZXJSZXNldHMgPSBzdHlsZS5jb3VudGVyUmVzZXQuc3BsaXQoL1xccyosXFxzKi8pO1xuICAgIHZhciBsZW5Db3VudGVyUmVzZXRzID0gY291bnRlclJlc2V0cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJSZXNldHM7IGkrKykge1xuICAgICAgICB2YXIgX2NvdW50ZXJSZXNldHMkaSRzcGxpID0gY291bnRlclJlc2V0c1tpXS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICAgICAgX2NvdW50ZXJSZXNldHMkaSRzcGxpMiA9IF9zbGljZWRUb0FycmF5KF9jb3VudGVyUmVzZXRzJGkkc3BsaSwgMiksXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMF0sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBfY291bnRlclJlc2V0cyRpJHNwbGkyWzFdO1xuXG4gICAgICAgIGNvdW50ZXJOYW1lcy5wdXNoKGNvdW50ZXJOYW1lKTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXTtcbiAgICAgICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudGVyLnB1c2gocGFyc2VJbnQoaW5pdGlhbFZhbHVlIHx8IDAsIDEwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50ZXJOYW1lcztcbn07XG5cbnZhciBwb3BDb3VudGVycyA9IGV4cG9ydHMucG9wQ291bnRlcnMgPSBmdW5jdGlvbiBwb3BDb3VudGVycyhjb3VudGVyTmFtZXMsIGRhdGEpIHtcbiAgICB2YXIgbGVuQ291bnRlcnMgPSBjb3VudGVyTmFtZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuQ291bnRlcnM7IGkrKykge1xuICAgICAgICBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lc1tpXV0ucG9wKCk7XG4gICAgfVxufTtcblxudmFyIHJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGZ1bmN0aW9uIHJlc29sdmVQc2V1ZG9Db250ZW50KG5vZGUsIHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY29udGVudCB8fCBzdHlsZS5jb250ZW50ID09PSAnbm9uZScgfHwgc3R5bGUuY29udGVudCA9PT0gJy1tb3otYWx0LWNvbnRlbnQnIHx8IHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gcGFyc2VDb250ZW50KHN0eWxlLmNvbnRlbnQpO1xuXG4gICAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGg7XG4gICAgdmFyIGNvbnRlbnRJdGVtcyA9IFtdO1xuICAgIHZhciBzID0gJyc7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50ZXIgKGlmIHRoZXJlIGlzIGEgXCJjb3VudGVyLWluY3JlbWVudFwiIGRlY2xhcmF0aW9uKVxuICAgIHZhciBjb3VudGVySW5jcmVtZW50ID0gc3R5bGUuY291bnRlckluY3JlbWVudDtcbiAgICBpZiAoY291bnRlckluY3JlbWVudCAmJiBjb3VudGVySW5jcmVtZW50ICE9PSAnbm9uZScpIHtcbiAgICAgICAgdmFyIF9jb3VudGVySW5jcmVtZW50JHNwbCA9IGNvdW50ZXJJbmNyZW1lbnQuc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIF9jb3VudGVySW5jcmVtZW50JHNwbDIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlckluY3JlbWVudCRzcGwsIDIpLFxuICAgICAgICAgICAgY291bnRlck5hbWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzBdLFxuICAgICAgICAgICAgaW5jcmVtZW50VmFsdWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzFdO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV07XG4gICAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gKz0gaW5jcmVtZW50VmFsdWUgPT09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUludChpbmNyZW1lbnRWYWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdGhlIGNvbnRlbnQgc3RyaW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLlNUUklORzpcbiAgICAgICAgICAgICAgICBzICs9IHRva2VuLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQVRUUklCVVRFOlxuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9rZW4udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBub2RlLmdldEF0dHJpYnV0ZSh0b2tlbi52YWx1ZSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUjpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW3Rva2VuLm5hbWUgfHwgJyddO1xuICAgICAgICAgICAgICAgIGlmIChfY291bnRlcikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShbX2NvdW50ZXJbX2NvdW50ZXIubGVuZ3RoIC0gMV1dLCAnJywgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DT1VOVEVSUzpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXJzID0gZGF0YS5jb3VudGVyc1t0b2tlbi5uYW1lIHx8ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gZm9ybWF0Q291bnRlclZhbHVlKF9jb3VudGVycywgdG9rZW4uZ2x1ZSwgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5PUEVOUVVPVEU6XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgdHJ1ZSwgZGF0YS5xdW90ZURlcHRoKTtcbiAgICAgICAgICAgICAgICBkYXRhLnF1b3RlRGVwdGgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNMT1NFUVVPVEU6XG4gICAgICAgICAgICAgICAgZGF0YS5xdW90ZURlcHRoLS07XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgZmFsc2UsIGRhdGEucXVvdGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5VUkw6XG4gICAgICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVCwgdmFsdWU6IHMgfSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuSU1BR0UsIHZhbHVlOiB0b2tlbi52YWx1ZSB8fCAnJyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzKSB7XG4gICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50SXRlbXM7XG59O1xuXG52YXIgcGFyc2VDb250ZW50ID0gZXhwb3J0cy5wYXJzZUNvbnRlbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgY2FjaGUpIHtcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGVbY29udGVudF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NvbnRlbnRdO1xuICAgIH1cblxuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgbGVuID0gY29udGVudC5sZW5ndGg7XG5cbiAgICB2YXIgaXNTdHJpbmcgPSBmYWxzZTtcbiAgICB2YXIgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmYWxzZTtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9ICcnO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY29udGVudC5jaGFyQXQoaSk7XG5cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdHJpbmcgPSAhaXNTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbiAmJiAhaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5TVFJJTkcsIHZhbHVlOiBzdHIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc3RyO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5BVFRSSUJVVEUsIHZhbHVlOiBhcmdzWzBdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlci5mb3JtYXQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGNvdW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyczIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUT0tFTl9UWVBFLkNPVU5URVJTLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmdsdWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudGVyczIuZm9ybWF0ID0gYXJnc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChfY291bnRlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuVVJMLCB2YWx1ZTogYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE90aGVyVG9rZW4odG9rZW5zLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHIpIHtcbiAgICAgICAgYWRkT3RoZXJUb2tlbih0b2tlbnMsIHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlW2NvbnRlbnRdID0gdG9rZW5zO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG59O1xuXG52YXIgYWRkT3RoZXJUb2tlbiA9IGZ1bmN0aW9uIGFkZE90aGVyVG9rZW4odG9rZW5zLCBpZGVudGlmaWVyKSB7XG4gICAgc3dpdGNoIChpZGVudGlmaWVyKSB7XG4gICAgICAgIGNhc2UgJ29wZW4tcXVvdGUnOlxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLk9QRU5RVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbG9zZS1xdW90ZSc6XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQ0xPU0VRVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbnZhciBnZXRRdW90ZSA9IGZ1bmN0aW9uIGdldFF1b3RlKHN0eWxlLCBpc09wZW5pbmcsIHF1b3RlRGVwdGgpIHtcbiAgICB2YXIgcXVvdGVzID0gc3R5bGUucXVvdGVzID8gc3R5bGUucXVvdGVzLnNwbGl0KC9cXHMrLykgOiBbXCInXFxcIidcIiwgXCInXFxcIidcIl07XG4gICAgdmFyIGlkeCA9IHF1b3RlRGVwdGggKiAyO1xuICAgIGlmIChpZHggPj0gcXVvdGVzLmxlbmd0aCkge1xuICAgICAgICBpZHggPSBxdW90ZXMubGVuZ3RoIC0gMjtcbiAgICB9XG4gICAgaWYgKCFpc09wZW5pbmcpIHtcbiAgICAgICAgKytpZHg7XG4gICAgfVxuICAgIHJldHVybiBxdW90ZXNbaWR4XS5yZXBsYWNlKC9eW1wiJ118W1wiJ10kL2csICcnKTtcbn07XG5cbnZhciBmb3JtYXRDb3VudGVyVmFsdWUgPSBmdW5jdGlvbiBmb3JtYXRDb3VudGVyVmFsdWUoY291bnRlciwgZ2x1ZSwgZm9ybWF0KSB7XG4gICAgdmFyIGxlbiA9IGNvdW50ZXIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZ2x1ZSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gKDAsIF9MaXN0SXRlbS5jcmVhdGVDb3VudGVyVGV4dCkoY291bnRlcltpXSwgKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGVUeXBlKShmb3JtYXQgfHwgJ2RlY2ltYWwnKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF9Gb250ID0gcmVxdWlyZSgnLi9Gb250Jyk7XG5cbnZhciBfR3JhZGllbnQgPSByZXF1aXJlKCcuL0dyYWRpZW50Jyk7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XG5cbnZhciBfYm9yZGVyID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JvcmRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuZGVyZXIodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRhcmdldC5yZW5kZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGUoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgX1RleHRDb250YWluZXIyLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBjaGlsZC5wYXJlbnQuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LnJlbmRlclRleHROb2RlKGNoaWxkLmJvdW5kcywgc3R5bGUuY29sb3IsIHN0eWxlLmZvbnQsIHN0eWxlLnRleHREZWNvcmF0aW9uLCBzdHlsZS50ZXh0U2hhZG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdTaGFwZShjaGlsZCwgY29udGFpbmVyLnN0eWxlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ltYWdlID0gX3RoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChjb250YWluZXIuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudEJveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZUNvbnRlbnRCb3gpKGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfd2lkdGggPSB0eXBlb2YgX2ltYWdlLndpZHRoID09PSAnbnVtYmVyJyAmJiBfaW1hZ2Uud2lkdGggPiAwID8gX2ltYWdlLndpZHRoIDogY29udGVudEJveC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaGVpZ2h0ID0gdHlwZW9mIF9pbWFnZS5oZWlnaHQgPT09ICdudW1iZXInICYmIF9pbWFnZS5oZWlnaHQgPiAwID8gX2ltYWdlLmhlaWdodCA6IGNvbnRlbnRCb3guaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF93aWR0aCA+IDAgJiYgX2hlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuY2xpcChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZHJhd0ltYWdlKF9pbWFnZSwgbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIF93aWR0aCwgX2hlaWdodCksIGNvbnRlbnRCb3gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5nZXRDbGlwUGF0aHMoKTtcbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIEhBU19CQUNLR1JPVU5EID0gIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgfHwgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLmxlbmd0aDtcblxuICAgICAgICAgICAgdmFyIGhhc1JlbmRlcmFibGVCb3JkZXJzID0gY29udGFpbmVyLnN0eWxlLmJvcmRlci5zb21lKGZ1bmN0aW9uIChib3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMsIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDbGlwKTtcblxuICAgICAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmNsaXAoW2JhY2tncm91bmRQYWludGluZ0FyZWFdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmZpbGwoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJhY2tncm91bmRJbWFnZShjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGJvcmRlciwgc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY29udGFpbmVyLmN1cnZlZEJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCB8fCBoYXNSZW5kZXJhYmxlQm9yZGVycykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5wYXJlbnQgPyBjb250YWluZXIucGFyZW50LmdldENsaXBQYXRocygpIDogW107XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLnNvdXJjZS5tZXRob2QgPT09ICd1cmwnICYmIGJhY2tncm91bmRJbWFnZS5zb3VyY2UuYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRSZXBlYXQoY29udGFpbmVyLCBiYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL2dyYWRpZW50L2kudGVzdChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmRJbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRSZXBlYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZFJlcGVhdChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IHRoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChiYWNrZ3JvdW5kLnNvdXJjZS5hcmdzWzBdKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlU2l6ZSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSkoYmFja2dyb3VuZCwgaW1hZ2UsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBfcGF0aCA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCkoYmFja2dyb3VuZCwgcG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEsIGNvbnRhaW5lci5ib3VuZHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRYID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KTtcbiAgICAgICAgICAgICAgICB2YXIgX29mZnNldFkgPSBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyUmVwZWF0KF9wYXRoLCBpbWFnZSwgYmFja2dyb3VuZEltYWdlU2l6ZSwgX29mZnNldFgsIF9vZmZzZXRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZEdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2VTaXplID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbikoYmFja2dyb3VuZC5wb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICB2YXIgZ3JhZGllbnRCb3VuZHMgPSBuZXcgX0JvdW5kcy5Cb3VuZHMoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLndpZHRoLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLmhlaWdodCk7XG5cbiAgICAgICAgICAgIHZhciBncmFkaWVudCA9ICgwLCBfR3JhZGllbnQucGFyc2VHcmFkaWVudCkoY29udGFpbmVyLCBiYWNrZ3JvdW5kLnNvdXJjZSwgZ3JhZGllbnRCb3VuZHMpO1xuICAgICAgICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmFkaWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0dyYWRpZW50LkdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyTGluZWFyR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9HcmFkaWVudC5HUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJhZGlhbEdyYWRpZW50KGdyYWRpZW50Qm91bmRzLCBncmFkaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJvcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCb3JkZXIoYm9yZGVyLCBzaWRlLCBjdXJ2ZVBvaW50cykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZHJhd1NoYXBlKCgwLCBfQm91bmRzLnBhcnNlUGF0aEZvckJvcmRlcikoY3VydmVQb2ludHMsIHNpZGUpLCBib3JkZXIuYm9yZGVyQ29sb3IpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJTdGFjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFjayhzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChzdGFjay5jb250YWluZXIuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX29wYWNpdHkgPSBzdGFjay5nZXRPcGFjaXR5KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9vcGFjaXR5ICE9PSB0aGlzLl9vcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldE9wYWNpdHkoc3RhY2suZ2V0T3BhY2l0eSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BhY2l0eSA9IF9vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBfdHJhbnNmb3JtID0gc3RhY2suY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoX3RyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0oc3RhY2suY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMF0udmFsdWUsIHN0YWNrLmNvbnRhaW5lci5ib3VuZHMudG9wICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMV0udmFsdWUsIF90cmFuc2Zvcm0udHJhbnNmb3JtLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclN0YWNrQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfc3BsaXRTdGFja2luZ0NvbnRleHQgPSBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdFN0YWNraW5nQ29udGV4dDIgPSBfc2xpY2VkVG9BcnJheShfc3BsaXRTdGFja2luZ0NvbnRleHQsIDUpLFxuICAgICAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlswXSxcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMV0sXG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXggPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzJdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzNdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbNF07XG5cbiAgICAgICAgICAgIHZhciBfc3BsaXREZXNjZW5kYW50cyA9IHNwbGl0RGVzY2VuZGFudHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdERlc2NlbmRhbnRzMiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdERlc2NlbmRhbnRzLCAyKSxcbiAgICAgICAgICAgICAgICBpbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlswXSxcbiAgICAgICAgICAgICAgICBub25JbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlsxXTtcblxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1wb3NpdGlvbi0zLyNwYWludGluZy1vcmRlclxuICAgICAgICAgICAgLy8gMS4gdGhlIGJhY2tncm91bmQgYW5kIGJvcmRlcnMgb2YgdGhlIGVsZW1lbnQgZm9ybWluZyB0aGUgc3RhY2tpbmcgY29udGV4dC5cblxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycyhzdGFjay5jb250YWluZXIpO1xuICAgICAgICAgICAgLy8gMi4gdGhlIGNoaWxkIHN0YWNraW5nIGNvbnRleHRzIHdpdGggbmVnYXRpdmUgc3RhY2sgbGV2ZWxzIChtb3N0IG5lZ2F0aXZlIGZpcnN0KS5cbiAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4LnNvcnQoc29ydEJ5WkluZGV4KS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gMy4gRm9yIGFsbCBpdHMgaW4tZmxvdywgbm9uLXBvc2l0aW9uZWQsIGJsb2NrLWxldmVsIGRlc2NlbmRhbnRzIGluIHRyZWUgb3JkZXI6XG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KHN0YWNrLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA0LiBBbGwgbm9uLXBvc2l0aW9uZWQgZmxvYXRpbmcgZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIuIEZvciBlYWNoIG9uZSBvZiB0aGVzZSxcbiAgICAgICAgICAgIC8vIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCwgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBuZXcgb25lLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cy5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNS4gdGhlIGluLWZsb3csIGlubGluZS1sZXZlbCwgbm9uLXBvc2l0aW9uZWQgZGVzY2VuZGFudHMsIGluY2x1ZGluZyBpbmxpbmUgdGFibGVzIGFuZCBpbmxpbmUgYmxvY2tzLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICBpbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA2LiBBbGwgcG9zaXRpb25lZCwgb3BhY2l0eSBvciB0cmFuc2Zvcm0gZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIgdGhhdCBmYWxsIGludG8gdGhlIGZvbGxvd2luZyBjYXRlZ29yaWVzOlxuICAgICAgICAgICAgLy8gIEFsbCBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIHdpdGggJ3otaW5kZXg6IGF1dG8nIG9yICd6LWluZGV4OiAwJywgaW4gdHJlZSBvcmRlci5cbiAgICAgICAgICAgIC8vICBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogYXV0bycsIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vICBidXQgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZVxuICAgICAgICAgICAgLy8gIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsIG5vdCB0aGlzIG5ldyBvbmUuIEZvciB0aG9zZSB3aXRoICd6LWluZGV4OiAwJyxcbiAgICAgICAgICAgIC8vICB0cmVhdCB0aGUgc3RhY2tpbmcgY29udGV4dCBnZW5lcmF0ZWQgYXRvbWljYWxseS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgQWxsIG9wYWNpdHkgZGVzY2VuZGFudHMgd2l0aCBvcGFjaXR5IGxlc3MgdGhhbiAxXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIEFsbCB0cmFuc2Zvcm0gZGVzY2VuZGFudHMgd2l0aCB0cmFuc2Zvcm0gb3RoZXIgdGhhbiBub25lXG4gICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNy4gU3RhY2tpbmcgY29udGV4dHMgZm9ybWVkIGJ5IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgd2l0aCB6LWluZGljZXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEgaW4gei1pbmRleFxuICAgICAgICAgICAgLy8gb3JkZXIgKHNtYWxsZXN0IGZpcnN0KSB0aGVuIHRyZWUgb3JkZXIuXG4gICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5zb3J0KHNvcnRCeVpJbmRleCkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVjdGFuZ2xlKHRoaXMub3B0aW9ucy54LCB0aGlzLm9wdGlvbnMueSwgdGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0LCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2soc3RhY2spO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LmdldFRhcmdldCgpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRoZW4oZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUub3B0aW9ucy5sb2dnZXIubG9nKCdSZW5kZXIgY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuXG52YXIgc3BsaXREZXNjZW5kYW50cyA9IGZ1bmN0aW9uIHNwbGl0RGVzY2VuZGFudHMoc3RhY2spIHtcbiAgICB2YXIgaW5saW5lTGV2ZWwgPSBbXTtcbiAgICB2YXIgbm9uSW5saW5lTGV2ZWwgPSBbXTtcblxuICAgIHZhciBsZW5ndGggPSBzdGFjay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGNoaWxkLmlzSW5saW5lTGV2ZWwoKSkge1xuICAgICAgICAgICAgaW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lubGluZUxldmVsLCBub25JbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc3BsaXRTdGFja2luZ0NvbnRleHRzID0gZnVuY3Rpb24gc3BsaXRTdGFja2luZ0NvbnRleHRzKHN0YWNrKSB7XG4gICAgdmFyIG5lZ2F0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gW107XG4gICAgdmFyIHBvc2l0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBbXTtcbiAgICB2YXIgbm9uUG9zaXRpb25lZElubGluZUxldmVsID0gW107XG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrLmNvbnRleHRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrLmNvbnRleHRzW2ldO1xuICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNoaWxkLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjaGlsZC5jb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IDApIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzRmxvYXRpbmcoKSkge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW25lZ2F0aXZlWkluZGV4LCB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSwgcG9zaXRpdmVaSW5kZXgsIG5vblBvc2l0aW9uZWRGbG9hdHMsIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc29ydEJ5WkluZGV4ID0gZnVuY3Rpb24gc29ydEJ5WkluZGV4KGEsIGIpIHtcbiAgICBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyIDwgYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5jb250YWluZXIuaW5kZXggPiBiLmNvbnRhaW5lci5pbmRleCA/IDEgOiAtMTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJlc291cmNlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRmVhdHVyZSA9IHJlcXVpcmUoJy4vRmVhdHVyZScpO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfUHJveHkgPSByZXF1aXJlKCcuL1Byb3h5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNvdXJjZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUxvYWRlcihvcHRpb25zLCBsb2dnZXIsIHdpbmRvdykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VMb2FkZXIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB0aGlzLmdldE9yaWdpbih3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VMb2FkZXIsIFt7XG4gICAgICAgIGtleTogJ2xvYWRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUluQ2FjaGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNCbG9iSW1hZ2Uoc3JjKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9IF9sb2FkSW1hZ2Uoc3JjLCB0aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNTVkcoc3JjKSB8fCBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1NWR19EUkFXSU5HKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd1RhaW50ID09PSB0cnVlIHx8IGlzSW5saW5lSW1hZ2Uoc3JjKSB8fCB0aGlzLmlzU2FtZU9yaWdpbihzcmMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHNyYywgc3JjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wcm94eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9ICgwLCBfUHJveHkuUHJveHkpKHNyYywgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy51c2VDT1JTID09PSB0cnVlICYmIF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19JTUFHRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHNyYywgc3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5saW5lSW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lSW1hZ2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGlzSW5saW5lSW1hZ2Uoc3JjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlSW5DYWNoZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NhbWVPcmlnaW4oc3JjKSAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnByb3h5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY10gPSAoMCwgX1Byb3h5LlByb3h5KShzcmMsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMyLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHJJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd4aHJJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB4aHJJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlW3NyY10gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRmFpbGVkIHRvIGZldGNoIGltYWdlICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgKyAnIHdpdGggc3RhdHVzIGNvZGUgJyArIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBmZXRjaGluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgc3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZENhbnZhcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkQ2FudmFzKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBTdHJpbmcodGhpcy5faW5kZXgrKyk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBQcm9taXNlLnJlc29sdmUobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNSZXNvdXJjZUluQ2FjaGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzUmVzb3VyY2VJbkNhY2hlKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbWFnZShrZXksIHNyYywgdXNlQ09SUykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdBZGRlZCBpbWFnZSAnICsga2V5LnN1YnN0cmluZygwLCAyNTYpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGltYWdlTG9hZEhhbmRsZXIgPSBmdW5jdGlvbiBpbWFnZUxvYWRIYW5kbGVyKHN1cHBvcnRzRGF0YUltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vaW9zIHNhZmFyaSAxMC4zIHRhaW50cyBjYW52YXMgd2l0aCBkYXRhIHVybHMgdW5sZXNzIGNyb3NzT3JpZ2luIGlzIHNldCB0byBhbm9ueW1vdXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0RhdGFJbWFnZXMgfHwgdXNlQ09SUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5saW5lIFhNTCBpbWFnZXMgbWF5IGZhaWwgdG8gcGFyc2UsIHRocm93aW5nIGFuIEVycm9yIGxhdGVyIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gX3RoaXM0Lm9wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGZldGNoaW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gaXNJbmxpbmVCYXNlNjRJbWFnZShzcmMpICYmICFpc1NWRyhzcmMpID8gLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9CQVNFNjRfRFJBV0lORyhzcmMpLnRoZW4oaW1hZ2VMb2FkSGFuZGxlcikgOiBpbWFnZUxvYWRIYW5kbGVyKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNTYW1lT3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2FtZU9yaWdpbih1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yaWdpbih1cmwpID09PSB0aGlzLm9yaWdpbjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0T3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gdGhpcy5fbGluayB8fCAodGhpcy5fbGluayA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgbGluay5ocmVmID0gbGluay5ocmVmOyAvLyBJRTksIExPTCEgLSBodHRwOi8vanNmaWRkbGUubmV0L25pa2xhc3ZoLzJlNDhiL1xuICAgICAgICAgICAgcmV0dXJuIGxpbmsucHJvdG9jb2wgKyBsaW5rLmhvc3RuYW1lICsgbGluay5wb3J0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWFkeScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGtleXMubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1LmNhY2hlW3N0cl0uY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodmFsdWVzKS50aGVuKGZ1bmN0aW9uIChpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnRmluaXNoZWQgbG9hZGluZyAnICsgaW1hZ2VzLmxlbmd0aCArICcgaW1hZ2VzJywgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZVN0b3JlKGtleXMsIGltYWdlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXNvdXJjZUxvYWRlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VMb2FkZXI7XG5cbnZhciBSZXNvdXJjZVN0b3JlID0gZXhwb3J0cy5SZXNvdXJjZVN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc291cmNlU3RvcmUoa2V5cywgcmVzb3VyY2VzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNvdXJjZVN0b3JlKTtcblxuICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXNvdXJjZVN0b3JlLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMuX3Jlc291cmNlc1tpbmRleF07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVzb3VyY2VTdG9yZTtcbn0oKTtcblxudmFyIElOTElORV9TVkcgPSAvXmRhdGE6aW1hZ2VcXC9zdmdcXCt4bWwvaTtcbnZhciBJTkxJTkVfQkFTRTY0ID0gL15kYXRhOmltYWdlXFwvLio7YmFzZTY0LC9pO1xudmFyIElOTElORV9JTUcgPSAvXmRhdGE6aW1hZ2VcXC8uKi9pO1xuXG52YXIgaXNJbmxpbmVJbWFnZSA9IGZ1bmN0aW9uIGlzSW5saW5lSW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIElOTElORV9JTUcudGVzdChzcmMpO1xufTtcbnZhciBpc0lubGluZUJhc2U2NEltYWdlID0gZnVuY3Rpb24gaXNJbmxpbmVCYXNlNjRJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gSU5MSU5FX0JBU0U2NC50ZXN0KHNyYyk7XG59O1xudmFyIGlzQmxvYkltYWdlID0gZnVuY3Rpb24gaXNCbG9iSW1hZ2Uoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoMCwgNCkgPT09ICdibG9iJztcbn07XG5cbnZhciBpc1NWRyA9IGZ1bmN0aW9uIGlzU1ZHKHNyYykge1xuICAgIHJldHVybiBzcmMuc3Vic3RyKC0zKS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyB8fCBJTkxJTkVfU1ZHLnRlc3Qoc3JjKTtcbn07XG5cbnZhciBfbG9hZEltYWdlID0gZnVuY3Rpb24gX2xvYWRJbWFnZShzcmMsIHRpbWVvdXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gSW5saW5lIFhNTCBpbWFnZXMgbWF5IGZhaWwgdG8gcGFyc2UsIHRocm93aW5nIGFuIEVycm9yIGxhdGVyIG9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgbG9hZGluZyBpbWFnZScgOiAnJyk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlQ29udGFpbmVyKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9wb3NpdGlvbicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIHBhcmVudCwgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNraW5nQ29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy50cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGFja2luZ0NvbnRleHQsIFt7XG4gICAgICAgIGtleTogJ2dldE9wYWNpdHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3BhY2l0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgKiB0aGlzLnBhcmVudC5nZXRPcGFjaXR5KCkgOiB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucGFyZW50IHx8IHRoaXMudHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPyB0aGlzIDogdGhpcy5wYXJlbnQuZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0YWNraW5nQ29udGV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhY2tpbmdDb250ZXh0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRCb3VuZHMgPSBleHBvcnRzLlRleHRCb3VuZHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0RGVjb3JhdGlvbicpO1xuXG52YXIgX0ZlYXR1cmUgPSByZXF1aXJlKCcuL0ZlYXR1cmUnKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX1VuaWNvZGUgPSByZXF1aXJlKCcuL1VuaWNvZGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRleHRCb3VuZHMgPSBleHBvcnRzLlRleHRCb3VuZHMgPSBmdW5jdGlvbiBUZXh0Qm91bmRzKHRleHQsIGJvdW5kcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0Qm91bmRzKTtcblxuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XG59O1xuXG52YXIgcGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5wYXJzZVRleHRCb3VuZHMgPSBmdW5jdGlvbiBwYXJzZVRleHRCb3VuZHModmFsdWUsIHBhcmVudCwgbm9kZSkge1xuICAgIHZhciBsZXR0ZXJSZW5kZXJpbmcgPSBwYXJlbnQuc3R5bGUubGV0dGVyU3BhY2luZyAhPT0gMDtcbiAgICB2YXIgdGV4dExpc3QgPSBsZXR0ZXJSZW5kZXJpbmcgPyAoMCwgX1VuaWNvZGUudG9Db2RlUG9pbnRzKSh2YWx1ZSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiAoMCwgX1VuaWNvZGUuZnJvbUNvZGVQb2ludCkoaSk7XG4gICAgfSkgOiAoMCwgX1VuaWNvZGUuYnJlYWtXb3JkcykodmFsdWUsIHBhcmVudCk7XG4gICAgdmFyIGxlbmd0aCA9IHRleHRMaXN0Lmxlbmd0aDtcbiAgICB2YXIgZGVmYXVsdFZpZXcgPSBub2RlLnBhcmVudE5vZGUgPyBub2RlLnBhcmVudE5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IG51bGw7XG4gICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0VmlldyA/IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IDogMDtcbiAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3ID8gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQgOiAwO1xuICAgIHZhciB0ZXh0Qm91bmRzID0gW107XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGV4dCA9IHRleHRMaXN0W2ldO1xuICAgICAgICBpZiAocGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uICE9PSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OLk5PTkUgfHwgdGV4dC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkFOR0VfQk9VTkRTKSB7XG4gICAgICAgICAgICAgICAgdGV4dEJvdW5kcy5wdXNoKG5ldyBUZXh0Qm91bmRzKHRleHQsIGdldFJhbmdlQm91bmRzKG5vZGUsIG9mZnNldCwgdGV4dC5sZW5ndGgsIHNjcm9sbFgsIHNjcm9sbFkpKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudE5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dEJvdW5kcy5wdXNoKG5ldyBUZXh0Qm91bmRzKHRleHQsIGdldFdyYXBwZXJCb3VuZHMobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkpKTtcbiAgICAgICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JBTkdFX0JPVU5EUykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUuc3BsaXRUZXh0KHRleHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gdGV4dC5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Qm91bmRzO1xufTtcblxudmFyIGdldFdyYXBwZXJCb3VuZHMgPSBmdW5jdGlvbiBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBub2RlKTtcbiAgICAgICAgdmFyIGJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKSh3cmFwcGVyLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgaWYgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIDAsIDApO1xufTtcblxudmFyIGdldFJhbmdlQm91bmRzID0gZnVuY3Rpb24gZ2V0UmFuZ2VCb3VuZHMobm9kZSwgb2Zmc2V0LCBsZW5ndGgsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICB2YXIgcmFuZ2UgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZXRTdGFydChub2RlLCBvZmZzZXQpO1xuICAgIHJhbmdlLnNldEVuZChub2RlLCBvZmZzZXQgKyBsZW5ndGgpO1xuICAgIHJldHVybiBfQm91bmRzLkJvdW5kcy5mcm9tQ2xpZW50UmVjdChyYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RleHRUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3BhcnNpbmcvdGV4dFRyYW5zZm9ybScpO1xuXG52YXIgX1RleHRCb3VuZHMgPSByZXF1aXJlKCcuL1RleHRCb3VuZHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRleHRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGV4dENvbnRhaW5lcih0ZXh0LCBwYXJlbnQsIGJvdW5kcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUZXh0Q29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdmcm9tVGV4dE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbVRleHROb2RlKG5vZGUsIHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSB0cmFuc2Zvcm0obm9kZS5kYXRhLCBwYXJlbnQuc3R5bGUudGV4dFRyYW5zZm9ybSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCAoMCwgX1RleHRCb3VuZHMucGFyc2VUZXh0Qm91bmRzKSh0ZXh0LCBwYXJlbnQsIG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUZXh0Q29udGFpbmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0Q29udGFpbmVyO1xuXG5cbnZhciBDQVBJVEFMSVpFID0gLyhefFxcc3w6fC18XFwofFxcKSkoW2Etel0pL2c7XG5cbnZhciB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odGV4dCwgX3RyYW5zZm9ybSkge1xuICAgIHN3aXRjaCAoX3RyYW5zZm9ybSkge1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLkxPV0VSQ0FTRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uQ0FQSVRBTElaRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoQ0FQSVRBTElaRSwgY2FwaXRhbGl6ZSk7XG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uVVBQRVJDQVNFOlxuICAgICAgICAgICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUobSwgcDEsIHAyKSB7XG4gICAgaWYgKG0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gcDEgKyBwMi50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5icmVha1dvcmRzID0gZXhwb3J0cy5mcm9tQ29kZVBvaW50ID0gZXhwb3J0cy50b0NvZGVQb2ludHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3NzTGluZUJyZWFrID0gcmVxdWlyZSgnY3NzLWxpbmUtYnJlYWsnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9jc3NMaW5lQnJlYWsudG9Db2RlUG9pbnRzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLmZyb21Db2RlUG9pbnQ7XG4gICAgfVxufSk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfb3ZlcmZsb3dXcmFwID0gcmVxdWlyZSgnLi9wYXJzaW5nL292ZXJmbG93V3JhcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYnJlYWtXb3JkcyA9IGV4cG9ydHMuYnJlYWtXb3JkcyA9IGZ1bmN0aW9uIGJyZWFrV29yZHMoc3RyLCBwYXJlbnQpIHtcbiAgICB2YXIgYnJlYWtlciA9ICgwLCBfY3NzTGluZUJyZWFrLkxpbmVCcmVha2VyKShzdHIsIHtcbiAgICAgICAgbGluZUJyZWFrOiBwYXJlbnQuc3R5bGUubGluZUJyZWFrLFxuICAgICAgICB3b3JkQnJlYWs6IHBhcmVudC5zdHlsZS5vdmVyZmxvd1dyYXAgPT09IF9vdmVyZmxvd1dyYXAuT1ZFUkZMT1dfV1JBUC5CUkVBS19XT1JEID8gJ2JyZWFrLXdvcmQnIDogcGFyZW50LnN0eWxlLndvcmRCcmVha1xuICAgIH0pO1xuXG4gICAgdmFyIHdvcmRzID0gW107XG4gICAgdmFyIGJrID0gdm9pZCAwO1xuXG4gICAgd2hpbGUgKCEoYmsgPSBicmVha2VyLm5leHQoKSkuZG9uZSkge1xuICAgICAgICB3b3Jkcy5wdXNoKGJrLnZhbHVlLnNsaWNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB3b3Jkcztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMoYml0LCB2YWx1ZSkge1xuICAgIHJldHVybiAoYml0ICYgdmFsdWUpICE9PSAwO1xufTtcblxudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxudmFyIGNvcHlDU1NTdHlsZXMgPSBleHBvcnRzLmNvcHlDU1NTdHlsZXMgPSBmdW5jdGlvbiBjb3B5Q1NTU3R5bGVzKHN0eWxlLCB0YXJnZXQpIHtcbiAgICAvLyBFZGdlIGRvZXMgbm90IHByb3ZpZGUgdmFsdWUgZm9yIGNzc1RleHRcbiAgICBmb3IgKHZhciBpID0gc3R5bGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gc3R5bGUuaXRlbShpKTtcbiAgICAgICAgLy8gU2FmYXJpIHNob3dzIHBzZXVkb2VsZW1lbnRzIGlmIGNvbnRlbnQgaXMgc2V0XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIFNNQUxMX0lNQUdFID0gZXhwb3J0cy5TTUFMTF9JTUFHRSA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW5kZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcblxudmFyIF9Mb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9nZ2VyKTtcblxudmFyIF9Ob2RlUGFyc2VyID0gcmVxdWlyZSgnLi9Ob2RlUGFyc2VyJyk7XG5cbnZhciBfUmVuZGVyZXIgPSByZXF1aXJlKCcuL1JlbmRlcmVyJyk7XG5cbnZhciBfUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXIpO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvRm9yZWlnbk9iamVjdFJlbmRlcmVyJyk7XG5cbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvcmVpZ25PYmplY3RSZW5kZXJlcik7XG5cbnZhciBfRmVhdHVyZSA9IHJlcXVpcmUoJy4vRmVhdHVyZScpO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF9DbG9uZSA9IHJlcXVpcmUoJy4vQ2xvbmUnKTtcblxudmFyIF9Gb250ID0gcmVxdWlyZSgnLi9Gb250Jyk7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcmVuZGVyRWxlbWVudCA9IGV4cG9ydHMucmVuZGVyRWxlbWVudCA9IGZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cbiAgICB2YXIgd2luZG93Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKG9wdGlvbnMuc2Nyb2xsWCwgb3B0aW9ucy5zY3JvbGxZLCBvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpbmRvd0hlaWdodCk7XG5cbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWJhY2tncm91bmQvI3NwZWNpYWwtYmFja2dyb3VuZHNcbiAgICB2YXIgZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoZ2V0Q29tcHV0ZWRTdHlsZShvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYmFja2dyb3VuZENvbG9yKSA6IF9Db2xvci5UUkFOU1BBUkVOVDtcbiAgICB2YXIgYm9keUJhY2tncm91bmRDb2xvciA9IG93bmVyRG9jdW1lbnQuYm9keSA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoZ2V0Q29tcHV0ZWRTdHlsZShvd25lckRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvcikgOiBfQ29sb3IuVFJBTlNQQVJFTlQ7XG5cbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gZWxlbWVudCA9PT0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBib2R5QmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSA/IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsIDogYm9keUJhY2tncm91bmRDb2xvciA6IGRvY3VtZW50QmFja2dyb3VuZENvbG9yIDogb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKG9wdGlvbnMuZm9yZWlnbk9iamVjdFJlbmRlcmluZyA/IC8vICRGbG93Rml4TWVcbiAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORyA6IFByb21pc2UucmVzb2x2ZShmYWxzZSkpLnRoZW4oZnVuY3Rpb24gKHN1cHBvcnRGb3JlaWduT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0Rm9yZWlnbk9iamVjdCA/IGZ1bmN0aW9uIChjbG9uZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnRG9jdW1lbnQgY2xvbmVkLCB1c2luZyBmb3JlaWduT2JqZWN0IHJlbmRlcmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmlubGluZUZvbnRzKG93bmVyRG9jdW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZXIucmVzb3VyY2VMb2FkZXIucmVhZHkoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMi5kZWZhdWx0KGNsb25lci5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBpc0RvY3VtZW50ID8gKDAsIF9Cb3VuZHMucGFyc2VEb2N1bWVudFNpemUpKG93bmVyRG9jdW1lbnQpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKGVsZW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBfcmVmLnRvcDtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiBvcHRpb25zLnkgPT09ICdudW1iZXInID8gb3B0aW9ucy55IDogdG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdHlwZW9mIG9wdGlvbnMud2lkdGggPT09ICdudW1iZXInID8gb3B0aW9ucy53aWR0aCA6IE1hdGguY2VpbCh3aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiBvcHRpb25zLndpbmRvd1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IG9wdGlvbnMud2luZG93SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBvcHRpb25zLnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFk6IG9wdGlvbnMuc2Nyb2xsWVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0obmV3IF9DbG9uZS5Eb2N1bWVudENsb25lcihlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHRydWUsIHJlbmRlckVsZW1lbnQpKSA6ICgwLCBfQ2xvbmUuY2xvbmVXaW5kb3cpKG93bmVyRG9jdW1lbnQsIHdpbmRvd0JvdW5kcywgZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCByZW5kZXJFbGVtZW50KS50aGVuKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9yZWYzID0gX3NsaWNlZFRvQXJyYXkoX3JlZjIsIDMpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IF9yZWYzWzBdLFxuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQgPSBfcmVmM1sxXSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZUxvYWRlciA9IF9yZWYzWzJdO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0RvY3VtZW50IGNsb25lZCwgdXNpbmcgY29tcHV0ZWQgcmVuZGVyaW5nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdGFjayA9ICgwLCBfTm9kZVBhcnNlci5Ob2RlUGFyc2VyKShjbG9uZWRFbGVtZW50LCByZXNvdXJjZUxvYWRlciwgbG9nZ2VyKTtcbiAgICAgICAgICAgIHZhciBjbG9uZWREb2N1bWVudCA9IGNsb25lZEVsZW1lbnQub3duZXJEb2N1bWVudDtcblxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gc3RhY2suY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgc3RhY2suY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gX0NvbG9yLlRSQU5TUEFSRU5UO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIucmVhZHkoKS50aGVuKGZ1bmN0aW9uIChpbWFnZVN0b3JlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvbnRNZXRyaWNzID0gbmV3IF9Gb250LkZvbnRNZXRyaWNzKGNsb25lZERvY3VtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdTdGFydGluZyByZW5kZXJlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IGNsb25lZERvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcblxuICAgICAgICAgICAgICAgIHZhciBpc0RvY3VtZW50ID0gY2xvbmVkRWxlbWVudC50YWdOYW1lID09PSAnSFRNTCcgfHwgY2xvbmVkRWxlbWVudC50YWdOYW1lID09PSAnQk9EWSc7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3JlZjQgPSBpc0RvY3VtZW50ID8gKDAsIF9Cb3VuZHMucGFyc2VEb2N1bWVudFNpemUpKG93bmVyRG9jdW1lbnQpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKGNsb25lZEVsZW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9yZWY0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcmVmNC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBfcmVmNC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBfcmVmNC50b3A7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRNZXRyaWNzOiBmb250TWV0cmljcyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTdG9yZTogaW1hZ2VTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBvcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiBvcHRpb25zLnkgPT09ICdudW1iZXInID8gb3B0aW9ucy55IDogdG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdHlwZW9mIG9wdGlvbnMud2lkdGggPT09ICdudW1iZXInID8gb3B0aW9ucy53aWR0aCA6IE1hdGguY2VpbCh3aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLnRhcmdldC5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdCh0YXJnZXQsIHJlbmRlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcihzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KG9wdGlvbnMudGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHJlbmRlcmVyLnJlbmRlcihzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92ZUNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0Nhbm5vdCBkZXRhY2ggY2xvbmVkIGlmcmFtZSBhcyBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4vUGF0aCcpO1xuXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4vVmVjdG9yJyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBsZXJwID0gZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gICAgcmV0dXJuIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGEueCArIChiLnggLSBhLngpICogdCwgYS55ICsgKGIueSAtIGEueSkgKiB0KTtcbn07XG5cbnZhciBCZXppZXJDdXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZXppZXJDdXJ2ZShzdGFydCwgc3RhcnRDb250cm9sLCBlbmRDb250cm9sLCBlbmQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJlemllckN1cnZlKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILkJFWklFUl9DVVJWRTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLnN0YXJ0Q29udHJvbCA9IHN0YXJ0Q29udHJvbDtcbiAgICAgICAgdGhpcy5lbmRDb250cm9sID0gZW5kQ29udHJvbDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJlemllckN1cnZlLCBbe1xuICAgICAgICBrZXk6ICdzdWJkaXZpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3ViZGl2aWRlKHQsIGZpcnN0SGFsZikge1xuICAgICAgICAgICAgdmFyIGFiID0gbGVycCh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0Q29udHJvbCwgdCk7XG4gICAgICAgICAgICB2YXIgYmMgPSBsZXJwKHRoaXMuc3RhcnRDb250cm9sLCB0aGlzLmVuZENvbnRyb2wsIHQpO1xuICAgICAgICAgICAgdmFyIGNkID0gbGVycCh0aGlzLmVuZENvbnRyb2wsIHRoaXMuZW5kLCB0KTtcbiAgICAgICAgICAgIHZhciBhYmJjID0gbGVycChhYiwgYmMsIHQpO1xuICAgICAgICAgICAgdmFyIGJjY2QgPSBsZXJwKGJjLCBjZCwgdCk7XG4gICAgICAgICAgICB2YXIgZGVzdCA9IGxlcnAoYWJiYywgYmNjZCwgdCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RIYWxmID8gbmV3IEJlemllckN1cnZlKHRoaXMuc3RhcnQsIGFiLCBhYmJjLCBkZXN0KSA6IG5ldyBCZXppZXJDdXJ2ZShkZXN0LCBiY2NkLCBjZCwgdGhpcy5lbmQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXZlcnNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJlemllckN1cnZlKHRoaXMuZW5kLCB0aGlzLmVuZENvbnRyb2wsIHRoaXMuc3RhcnRDb250cm9sLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCZXppZXJDdXJ2ZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQmV6aWVyQ3VydmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4vUGF0aCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gQ2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjbGUpO1xuXG4gICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5DSVJDTEU7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB4IHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oeSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeSB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHJhZGl1cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmFkaXVzIHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBQQVRIID0gZXhwb3J0cy5QQVRIID0ge1xuICAgIFZFQ1RPUjogMCxcbiAgICBCRVpJRVJfQ1VSVkU6IDEsXG4gICAgQ0lSQ0xFOiAyXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU2l6ZSA9IGZ1bmN0aW9uIFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaXplKTtcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNpemU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4vUGF0aCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmVjdG9yID0gZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVjdG9yKTtcblxuICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguVkVDVE9SO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgVmVjdG9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9DYW52YXNSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvQ2FudmFzUmVuZGVyZXInKTtcblxudmFyIF9DYW52YXNSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYW52YXNSZW5kZXJlcik7XG5cbnZhciBfTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcblxudmFyIF9Mb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9nZ2VyKTtcblxudmFyIF9XaW5kb3cgPSByZXF1aXJlKCcuL1dpbmRvdycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaHRtbDJjYW52YXMgPSBmdW5jdGlvbiBodG1sMmNhbnZhcyhlbGVtZW50LCBjb25mKSB7XG4gICAgdmFyIGNvbmZpZyA9IGNvbmYgfHwge307XG4gICAgdmFyIGxvZ2dlciA9IG5ldyBfTG9nZ2VyMi5kZWZhdWx0KHR5cGVvZiBjb25maWcubG9nZ2luZyA9PT0gJ2Jvb2xlYW4nID8gY29uZmlnLmxvZ2dpbmcgOiB0cnVlKTtcbiAgICBsb2dnZXIubG9nKCdodG1sMmNhbnZhcyAnICsgXCIkbnBtX3BhY2thZ2VfdmVyc2lvblwiKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25maWcub25yZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZXJyb3IoJ29ucmVuZGVyZWQgb3B0aW9uIGlzIGRlcHJlY2F0ZWQsIGh0bWwyY2FudmFzIHJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIGNhbnZhcyBhcyB0aGUgdmFsdWUnKTtcbiAgICB9XG5cbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdQcm92aWRlZCBlbGVtZW50IGlzIG5vdCB3aXRoaW4gYSBEb2N1bWVudCcpO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdFZpZXcgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgYWxsb3dUYWludDogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpbWFnZVRpbWVvdXQ6IDE1MDAwLFxuICAgICAgICBsb2dnaW5nOiB0cnVlLFxuICAgICAgICBwcm94eTogbnVsbCxcbiAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiBmYWxzZSxcbiAgICAgICAgc2NhbGU6IGRlZmF1bHRWaWV3LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgdGFyZ2V0OiBuZXcgX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0KGNvbmZpZy5jYW52YXMpLFxuICAgICAgICB1c2VDT1JTOiBmYWxzZSxcbiAgICAgICAgd2luZG93V2lkdGg6IGRlZmF1bHRWaWV3LmlubmVyV2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodDogZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXG4gICAgICAgIHNjcm9sbFg6IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBzY3JvbGxZOiBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldFxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gKDAsIF9XaW5kb3cucmVuZGVyRWxlbWVudCkoZWxlbWVudCwgX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBjb25maWcpLCBsb2dnZXIpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5odG1sMmNhbnZhcy5DYW52YXNSZW5kZXJlciA9IF9DYW52YXNSZW5kZXJlcjIuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sMmNhbnZhczsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfT1JJR0lOID0gZXhwb3J0cy5CQUNLR1JPVU5EX0NMSVAgPSBleHBvcnRzLkJBQ0tHUk9VTkRfU0laRSA9IGV4cG9ydHMuQkFDS0dST1VORF9SRVBFQVQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9TaXplID0gcmVxdWlyZSgnLi4vZHJhd2luZy9TaXplJyk7XG5cbnZhciBfU2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaXplKTtcblxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuLi9kcmF3aW5nL1ZlY3RvcicpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4uL0JvdW5kcycpO1xuXG52YXIgX3BhZGRpbmcgPSByZXF1aXJlKCcuL3BhZGRpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJBQ0tHUk9VTkRfUkVQRUFUID0gZXhwb3J0cy5CQUNLR1JPVU5EX1JFUEVBVCA9IHtcbiAgICBSRVBFQVQ6IDAsXG4gICAgTk9fUkVQRUFUOiAxLFxuICAgIFJFUEVBVF9YOiAyLFxuICAgIFJFUEVBVF9ZOiAzXG59O1xuXG52YXIgQkFDS0dST1VORF9TSVpFID0gZXhwb3J0cy5CQUNLR1JPVU5EX1NJWkUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDT05UQUlOOiAxLFxuICAgIENPVkVSOiAyLFxuICAgIExFTkdUSDogM1xufTtcblxudmFyIEJBQ0tHUk9VTkRfQ0xJUCA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0ge1xuICAgIEJPUkRFUl9CT1g6IDAsXG4gICAgUEFERElOR19CT1g6IDEsXG4gICAgQ09OVEVOVF9CT1g6IDJcbn07XG5cbnZhciBCQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9PUklHSU4gPSBCQUNLR1JPVU5EX0NMSVA7XG5cbnZhciBBVVRPID0gJ2F1dG8nO1xuXG52YXIgQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBCYWNrZ3JvdW5kU2l6ZShzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhY2tncm91bmRTaXplKTtcblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICBjYXNlICdjb250YWluJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT05UQUlOO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvdmVyJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5BVVRPO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc2l6ZSk7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRTaXplKGJhY2tncm91bmRJbWFnZSwgaW1hZ2UsIGJvdW5kcykge1xuICAgIHZhciB3aWR0aCA9IDA7XG4gICAgdmFyIGhlaWdodCA9IDA7XG4gICAgdmFyIHNpemUgPSBiYWNrZ3JvdW5kSW1hZ2Uuc2l6ZTtcbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09OVEFJTiB8fCBzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUikge1xuICAgICAgICB2YXIgdGFyZ2V0UmF0aW8gPSBib3VuZHMud2lkdGggLyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICB2YXIgY3VycmVudFJhdGlvID0gaW1hZ2Uud2lkdGggLyBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB0YXJnZXRSYXRpbyA8IGN1cnJlbnRSYXRpbyAhPT0gKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPVkVSKSA/IG5ldyBfU2l6ZTIuZGVmYXVsdChib3VuZHMud2lkdGgsIGJvdW5kcy53aWR0aCAvIGN1cnJlbnRSYXRpbykgOiBuZXcgX1NpemUyLmRlZmF1bHQoYm91bmRzLmhlaWdodCAqIGN1cnJlbnRSYXRpbywgYm91bmRzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0udmFsdWUpIHtcbiAgICAgICAgd2lkdGggPSBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTyAmJiBzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHNpemVbMV0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBpbWFnZS53aWR0aCAqIGltYWdlLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHNpemVbMV0udmFsdWUpIHtcbiAgICAgICAgaGVpZ2h0ID0gc2l6ZVsxXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0ICogaW1hZ2Uud2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBfU2l6ZTIuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBjYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZShiYWNrZ3JvdW5kSW1hZ2UsIGJvdW5kcykge1xuICAgIHZhciBzaXplID0gYmFja2dyb3VuZEltYWdlLnNpemU7XG4gICAgdmFyIHdpZHRoID0gc2l6ZVswXS52YWx1ZSA/IHNpemVbMF0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpIDogYm91bmRzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBzaXplWzFdLnZhbHVlID8gc2l6ZVsxXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpIDogc2l6ZVswXS52YWx1ZSA/IHdpZHRoIDogYm91bmRzLmhlaWdodDtcblxuICAgIHJldHVybiBuZXcgX1NpemUyLmRlZmF1bHQod2lkdGgsIGhlaWdodCk7XG59O1xuXG52YXIgQVVUT19TSVpFID0gbmV3IEJhY2tncm91bmRTaXplKEFVVE8pO1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEoY3VydmVzLCBjbGlwKSB7XG4gICAgc3dpdGNoIChjbGlwKSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCkoY3VydmVzKTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1g6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKGN1cnZlcyk7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKGJhY2tncm91bmRPcmlnaW4sIGJvdW5kcywgcGFkZGluZywgYm9yZGVyKSB7XG4gICAgdmFyIHBhZGRpbmdCb3ggPSAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94KShib3VuZHMsIGJvcmRlcik7XG5cbiAgICBzd2l0Y2ggKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5MRUZUXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLlJJR0hUXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1RvcCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5UT1BdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLkJPVFRPTV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQm91bmRzLkJvdW5kcyhwYWRkaW5nQm94LmxlZnQgKyBwYWRkaW5nTGVmdCwgcGFkZGluZ0JveC50b3AgKyBwYWRkaW5nVG9wLCBwYWRkaW5nQm94LndpZHRoIC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQsIHBhZGRpbmdCb3guaGVpZ2h0IC0gcGFkZGluZ1RvcCAtIHBhZGRpbmdCb3R0b20pO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHBhZGRpbmdCb3g7XG4gICAgfVxufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKHBvc2l0aW9uLCBzaXplLCBib3VuZHMpIHtcbiAgICByZXR1cm4gbmV3IF9WZWN0b3IyLmRlZmF1bHQocG9zaXRpb25bMF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGggLSBzaXplLndpZHRoKSwgcG9zaXRpb25bMV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpKTtcbn07XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aChiYWNrZ3JvdW5kLCBwb3NpdGlvbiwgc2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSwgYm91bmRzKSB7XG4gICAgdmFyIHJlcGVhdCA9IGJhY2tncm91bmQucmVwZWF0O1xuICAgIHN3aXRjaCAocmVwZWF0KSB7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1g6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoc2l6ZS5oZWlnaHQgKyBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoc2l6ZS5oZWlnaHQgKyBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKV07XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1k6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuTk9fUkVQRUFUOlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCkpXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSldO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmQgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZChzdHlsZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuYmFja2dyb3VuZENvbG9yKSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBwYXJzZUJhY2tncm91bmRJbWFnZXMoc3R5bGUsIHJlc291cmNlTG9hZGVyKSxcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IHBhcnNlQmFja2dyb3VuZENsaXAoc3R5bGUuYmFja2dyb3VuZENsaXApLFxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBwYXJzZUJhY2tncm91bmRPcmlnaW4oc3R5bGUuYmFja2dyb3VuZE9yaWdpbilcbiAgICB9O1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZENsaXAgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRDbGlwKGJhY2tncm91bmRDbGlwKSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kQ2xpcCkge1xuICAgICAgICBjYXNlICdwYWRkaW5nLWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YO1xuICAgICAgICBjYXNlICdjb250ZW50LWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLkNPTlRFTlRfQk9YO1xuICAgIH1cbiAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kT3JpZ2luKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRPcmlnaW4pIHtcbiAgICAgICAgY2FzZSAncGFkZGluZy1ib3gnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YO1xuICAgICAgICBjYXNlICdjb250ZW50LWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uQ09OVEVOVF9CT1g7XG4gICAgfVxuICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5CT1JERVJfQk9YO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZFJlcGVhdCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZFJlcGVhdChiYWNrZ3JvdW5kUmVwZWF0KSB7XG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kUmVwZWF0LnRyaW0oKSkge1xuICAgICAgICBjYXNlICduby1yZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULk5PX1JFUEVBVDtcbiAgICAgICAgY2FzZSAncmVwZWF0LXgnOlxuICAgICAgICBjYXNlICdyZXBlYXQgbm8tcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWDtcbiAgICAgICAgY2FzZSAncmVwZWF0LXknOlxuICAgICAgICBjYXNlICduby1yZXBlYXQgcmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWTtcbiAgICAgICAgY2FzZSAncmVwZWF0JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVQ7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBiYWNrZ3JvdW5kLXJlcGVhdCB2YWx1ZSBcIicgKyBiYWNrZ3JvdW5kUmVwZWF0ICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRJbWFnZXMgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRJbWFnZXMoc3R5bGUsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBwYXJzZUJhY2tncm91bmRJbWFnZShzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpLm1hcChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZShiYWNrZ3JvdW5kSW1hZ2UuYXJnc1swXSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UuYXJncyA9IGtleSA/IFtrZXldIDogW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmRJbWFnZTtcbiAgICB9KTtcbiAgICB2YXIgcG9zaXRpb25zID0gc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uLnNwbGl0KCcsJyk7XG4gICAgdmFyIHJlcGVhdHMgPSBzdHlsZS5iYWNrZ3JvdW5kUmVwZWF0LnNwbGl0KCcsJyk7XG4gICAgdmFyIHNpemVzID0gc3R5bGUuYmFja2dyb3VuZFNpemUuc3BsaXQoJywnKTtcblxuICAgIHJldHVybiBzb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlLCBpbmRleCkge1xuICAgICAgICB2YXIgc2l6ZSA9IChzaXplc1tpbmRleF0gfHwgQVVUTykudHJpbSgpLnNwbGl0KCcgJykubWFwKHBhcnNlQmFja2dyb3VuZFNpemUpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAocG9zaXRpb25zW2luZGV4XSB8fCBBVVRPKS50cmltKCkuc3BsaXQoJyAnKS5tYXAocGFyc2VCYWNrZ291bmRQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgcmVwZWF0OiBwYXJzZUJhY2tncm91bmRSZXBlYXQodHlwZW9mIHJlcGVhdHNbaW5kZXhdID09PSAnc3RyaW5nJyA/IHJlcGVhdHNbaW5kZXhdIDogcmVwZWF0c1swXSksXG4gICAgICAgICAgICBzaXplOiBzaXplLmxlbmd0aCA8IDIgPyBbc2l6ZVswXSwgQVVUT19TSVpFXSA6IFtzaXplWzBdLCBzaXplWzFdXSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbi5sZW5ndGggPCAyID8gW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblswXV0gOiBbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdXVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRTaXplKHNpemUpIHtcbiAgICByZXR1cm4gc2l6ZSA9PT0gJ2F1dG8nID8gQVVUT19TSVpFIDogbmV3IEJhY2tncm91bmRTaXplKHNpemUpO1xufTtcblxudmFyIHBhcnNlQmFja2dvdW5kUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZUJhY2tnb3VuZFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKTtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyk7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChwb3NpdGlvbik7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBleHBvcnRzLnBhcnNlQmFja2dyb3VuZEltYWdlID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2UpIHtcbiAgICB2YXIgd2hpdGVzcGFjZSA9IC9eXFxzJC87XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIG1ldGhvZCA9ICcnO1xuICAgIHZhciBxdW90ZSA9IG51bGw7XG4gICAgdmFyIGRlZmluaXRpb24gPSAnJztcbiAgICB2YXIgbW9kZSA9IDA7XG4gICAgdmFyIG51bVBhcmVuID0gMDtcblxuICAgIHZhciBhcHBlbmRSZXN1bHQgPSBmdW5jdGlvbiBhcHBlbmRSZXN1bHQoKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24uc3Vic3RyKDAsIDEpID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGRlZmluaXRpb24uc3Vic3RyKDEsIGRlZmluaXRpb24ubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZWZpeF9pID0gbWV0aG9kLmluZGV4T2YoJy0nLCAxKSArIDE7XG4gICAgICAgICAgICBpZiAobWV0aG9kLnN1YnN0cigwLCAxKSA9PT0gJy0nICYmIHByZWZpeF9pID4gMCkge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IG1ldGhvZC5zdWJzdHIoMCwgcHJlZml4X2kpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnN1YnN0cihwcmVmaXhfaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChtZXRob2QgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3MgPSBbXTtcbiAgICAgICAgbWV0aG9kID0gZGVmaW5pdGlvbiA9ICcnO1xuICAgIH07XG5cbiAgICBpbWFnZS5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAobW9kZSA9PT0gMCAmJiB3aGl0ZXNwYWNlLnRlc3QoYykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICBpZiAoIXF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1b3RlID09PSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtUGFyZW4rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICAgICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVBhcmVuLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVBhcmVuID09PSAwICYmICFtZXRob2QubWF0Y2goL151cmwkL2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goZGVmaW5pdGlvbi50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgIG1ldGhvZCArPSBjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVmaW5pdGlvbiArPSBjO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm9yZGVyID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSBleHBvcnRzLkJPUkRFUl9TVFlMRSA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4uL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQk9SREVSX1NUWUxFID0gZXhwb3J0cy5CT1JERVJfU1RZTEUgPSB7XG4gICAgTk9ORTogMCxcbiAgICBTT0xJRDogMVxufTtcblxudmFyIEJPUkRFUl9TSURFUyA9IGV4cG9ydHMuQk9SREVSX1NJREVTID0ge1xuICAgIFRPUDogMCxcbiAgICBSSUdIVDogMSxcbiAgICBCT1RUT006IDIsXG4gICAgTEVGVDogM1xufTtcblxudmFyIFNJREVTID0gT2JqZWN0LmtleXMoQk9SREVSX1NJREVTKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwYXJzZUJvcmRlclN0eWxlID0gZnVuY3Rpb24gcGFyc2VCb3JkZXJTdHlsZShzdHlsZSkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICByZXR1cm4gQk9SREVSX1NUWUxFLk5PTkU7XG4gICAgfVxuICAgIHJldHVybiBCT1JERVJfU1RZTEUuU09MSUQ7XG59O1xuXG52YXIgcGFyc2VCb3JkZXIgPSBleHBvcnRzLnBhcnNlQm9yZGVyID0gZnVuY3Rpb24gcGFyc2VCb3JkZXIoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1jb2xvcicpKTtcbiAgICAgICAgdmFyIGJvcmRlclN0eWxlID0gcGFyc2VCb3JkZXJTdHlsZShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXN0eWxlJykpO1xuICAgICAgICB2YXIgYm9yZGVyV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctd2lkdGgnKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogaXNOYU4oYm9yZGVyV2lkdGgpID8gMCA6IGJvcmRlcldpZHRoXG4gICAgICAgIH07XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0lERVMgPSBbJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnXTtcblxudmFyIHBhcnNlQm9yZGVyUmFkaXVzID0gZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyUmFkaXVzKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLXJhZGl1cycpO1xuXG4gICAgICAgIHZhciBfdmFsdWUkc3BsaXQkbWFwID0gdmFsdWUuc3BsaXQoJyAnKS5tYXAoX0xlbmd0aDIuZGVmYXVsdC5jcmVhdGUpLFxuICAgICAgICAgICAgX3ZhbHVlJHNwbGl0JG1hcDIgPSBfc2xpY2VkVG9BcnJheShfdmFsdWUkc3BsaXQkbWFwLCAyKSxcbiAgICAgICAgICAgIGhvcml6b250YWwgPSBfdmFsdWUkc3BsaXQkbWFwMlswXSxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3ZhbHVlJHNwbGl0JG1hcDJbMV07XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ3VuZGVmaW5lZCcgPyBbaG9yaXpvbnRhbCwgaG9yaXpvbnRhbF0gOiBbaG9yaXpvbnRhbCwgdmVydGljYWxdO1xuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBESVNQTEFZID0gZXhwb3J0cy5ESVNQTEFZID0ge1xuICAgIE5PTkU6IDEgPDwgMCxcbiAgICBCTE9DSzogMSA8PCAxLFxuICAgIElOTElORTogMSA8PCAyLFxuICAgIFJVTl9JTjogMSA8PCAzLFxuICAgIEZMT1c6IDEgPDwgNCxcbiAgICBGTE9XX1JPT1Q6IDEgPDwgNSxcbiAgICBUQUJMRTogMSA8PCA2LFxuICAgIEZMRVg6IDEgPDwgNyxcbiAgICBHUklEOiAxIDw8IDgsXG4gICAgUlVCWTogMSA8PCA5LFxuICAgIFNVQkdSSUQ6IDEgPDwgMTAsXG4gICAgTElTVF9JVEVNOiAxIDw8IDExLFxuICAgIFRBQkxFX1JPV19HUk9VUDogMSA8PCAxMixcbiAgICBUQUJMRV9IRUFERVJfR1JPVVA6IDEgPDwgMTMsXG4gICAgVEFCTEVfRk9PVEVSX0dST1VQOiAxIDw8IDE0LFxuICAgIFRBQkxFX1JPVzogMSA8PCAxNSxcbiAgICBUQUJMRV9DRUxMOiAxIDw8IDE2LFxuICAgIFRBQkxFX0NPTFVNTl9HUk9VUDogMSA8PCAxNyxcbiAgICBUQUJMRV9DT0xVTU46IDEgPDwgMTgsXG4gICAgVEFCTEVfQ0FQVElPTjogMSA8PCAxOSxcbiAgICBSVUJZX0JBU0U6IDEgPDwgMjAsXG4gICAgUlVCWV9URVhUOiAxIDw8IDIxLFxuICAgIFJVQllfQkFTRV9DT05UQUlORVI6IDEgPDwgMjIsXG4gICAgUlVCWV9URVhUX0NPTlRBSU5FUjogMSA8PCAyMyxcbiAgICBDT05URU5UUzogMSA8PCAyNCxcbiAgICBJTkxJTkVfQkxPQ0s6IDEgPDwgMjUsXG4gICAgSU5MSU5FX0xJU1RfSVRFTTogMSA8PCAyNixcbiAgICBJTkxJTkVfVEFCTEU6IDEgPDwgMjcsXG4gICAgSU5MSU5FX0ZMRVg6IDEgPDwgMjgsXG4gICAgSU5MSU5FX0dSSUQ6IDEgPDwgMjlcbn07XG5cbnZhciBwYXJzZURpc3BsYXlWYWx1ZSA9IGZ1bmN0aW9uIHBhcnNlRGlzcGxheVZhbHVlKGRpc3BsYXkpIHtcbiAgICBzd2l0Y2ggKGRpc3BsYXkpIHtcbiAgICAgICAgY2FzZSAnYmxvY2snOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuQkxPQ0s7XG4gICAgICAgIGNhc2UgJ2lubGluZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkU7XG4gICAgICAgIGNhc2UgJ3J1bi1pbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVU5fSU47XG4gICAgICAgIGNhc2UgJ2Zsb3cnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxPVztcbiAgICAgICAgY2FzZSAnZmxvdy1yb290JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMT1dfUk9PVDtcbiAgICAgICAgY2FzZSAndGFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEU7XG4gICAgICAgIGNhc2UgJ2ZsZXgnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxFWDtcbiAgICAgICAgY2FzZSAnZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5HUklEO1xuICAgICAgICBjYXNlICdydWJ5JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQlk7XG4gICAgICAgIGNhc2UgJ3N1YmdyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuU1VCR1JJRDtcbiAgICAgICAgY2FzZSAnbGlzdC1pdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkxJU1RfSVRFTTtcbiAgICAgICAgY2FzZSAndGFibGUtcm93LWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX1JPV19HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtaGVhZGVyLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0hFQURFUl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtZm9vdGVyLWdyb3VwJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0ZPT1RFUl9HUk9VUDtcbiAgICAgICAgY2FzZSAndGFibGUtcm93JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX1JPVztcbiAgICAgICAgY2FzZSAndGFibGUtY2VsbCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DRUxMO1xuICAgICAgICBjYXNlICd0YWJsZS1jb2x1bW4tZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ09MVU1OX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1jb2x1bW4nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ09MVU1OO1xuICAgICAgICBjYXNlICd0YWJsZS1jYXB0aW9uJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NBUFRJT047XG4gICAgICAgIGNhc2UgJ3J1YnktYmFzZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0U7XG4gICAgICAgIGNhc2UgJ3J1YnktdGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX1RFWFQ7XG4gICAgICAgIGNhc2UgJ3J1YnktYmFzZS1jb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9CQVNFX0NPTlRBSU5FUjtcbiAgICAgICAgY2FzZSAncnVieS10ZXh0LWNvbnRhaW5lcic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX1RFWFRfQ09OVEFJTkVSO1xuICAgICAgICBjYXNlICdjb250ZW50cyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5DT05URU5UUztcbiAgICAgICAgY2FzZSAnaW5saW5lLWJsb2NrJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9CTE9DSztcbiAgICAgICAgY2FzZSAnaW5saW5lLWxpc3QtaXRlbSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfTElTVF9JVEVNO1xuICAgICAgICBjYXNlICdpbmxpbmUtdGFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX1RBQkxFO1xuICAgICAgICBjYXNlICdpbmxpbmUtZmxleCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfRkxFWDtcbiAgICAgICAgY2FzZSAnaW5saW5lLWdyaWQnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0dSSUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIERJU1BMQVkuTk9ORTtcbn07XG5cbnZhciBzZXREaXNwbGF5Qml0ID0gZnVuY3Rpb24gc2V0RGlzcGxheUJpdChiaXQsIGRpc3BsYXkpIHtcbiAgICByZXR1cm4gYml0IHwgcGFyc2VEaXNwbGF5VmFsdWUoZGlzcGxheSk7XG59O1xuXG52YXIgcGFyc2VEaXNwbGF5ID0gZXhwb3J0cy5wYXJzZURpc3BsYXkgPSBmdW5jdGlvbiBwYXJzZURpc3BsYXkoZGlzcGxheSkge1xuICAgIHJldHVybiBkaXNwbGF5LnNwbGl0KCcgJykucmVkdWNlKHNldERpc3BsYXlCaXQsIDApO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBGTE9BVCA9IGV4cG9ydHMuRkxPQVQgPSB7XG4gICAgTk9ORTogMCxcbiAgICBMRUZUOiAxLFxuICAgIFJJR0hUOiAyLFxuICAgIElOTElORV9TVEFSVDogMyxcbiAgICBJTkxJTkVfRU5EOiA0XG59O1xuXG52YXIgcGFyc2VDU1NGbG9hdCA9IGV4cG9ydHMucGFyc2VDU1NGbG9hdCA9IGZ1bmN0aW9uIHBhcnNlQ1NTRmxvYXQoZmxvYXQpIHtcbiAgICBzd2l0Y2ggKGZsb2F0KSB7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULkxFRlQ7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5SSUdIVDtcbiAgICAgICAgY2FzZSAnaW5saW5lLXN0YXJ0JzpcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5JTkxJTkVfU1RBUlQ7XG4gICAgICAgIGNhc2UgJ2lubGluZS1lbmQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULklOTElORV9FTkQ7XG4gICAgfVxuICAgIHJldHVybiBGTE9BVC5OT05FO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuXG52YXIgcGFyc2VGb250V2VpZ2h0ID0gZnVuY3Rpb24gcGFyc2VGb250V2VpZ2h0KHdlaWdodCkge1xuICAgIHN3aXRjaCAod2VpZ2h0KSB7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gNDAwO1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgICAgIHJldHVybiA3MDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcGFyc2VJbnQod2VpZ2h0LCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDQwMCA6IHZhbHVlO1xufTtcblxudmFyIHBhcnNlRm9udCA9IGV4cG9ydHMucGFyc2VGb250ID0gZnVuY3Rpb24gcGFyc2VGb250KHN0eWxlKSB7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZS5mb250RmFtaWx5O1xuICAgIHZhciBmb250U2l6ZSA9IHN0eWxlLmZvbnRTaXplO1xuICAgIHZhciBmb250U3R5bGUgPSBzdHlsZS5mb250U3R5bGU7XG4gICAgdmFyIGZvbnRWYXJpYW50ID0gc3R5bGUuZm9udFZhcmlhbnQ7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSBwYXJzZUZvbnRXZWlnaHQoc3R5bGUuZm9udFdlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgICAgIGZvbnRTdHlsZTogZm9udFN0eWxlLFxuICAgICAgICBmb250VmFyaWFudDogZm9udFZhcmlhbnQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRcbiAgICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwYXJzZUxldHRlclNwYWNpbmcgPSBleHBvcnRzLnBhcnNlTGV0dGVyU3BhY2luZyA9IGZ1bmN0aW9uIHBhcnNlTGV0dGVyU3BhY2luZyhsZXR0ZXJTcGFjaW5nKSB7XG4gICAgaWYgKGxldHRlclNwYWNpbmcgPT09ICdub3JtYWwnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGxldHRlclNwYWNpbmcpO1xuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyAwIDogdmFsdWU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIExJTkVfQlJFQUsgPSBleHBvcnRzLkxJTkVfQlJFQUsgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBTVFJJQ1Q6ICdzdHJpY3QnXG59O1xuXG52YXIgcGFyc2VMaW5lQnJlYWsgPSBleHBvcnRzLnBhcnNlTGluZUJyZWFrID0gZnVuY3Rpb24gcGFyc2VMaW5lQnJlYWsod29yZEJyZWFrKSB7XG4gICAgc3dpdGNoICh3b3JkQnJlYWspIHtcbiAgICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgICAgIHJldHVybiBMSU5FX0JSRUFLLlNUUklDVDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSU5FX0JSRUFLLk5PUk1BTDtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUxpc3RTdHlsZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGVUeXBlID0gZXhwb3J0cy5MSVNUX1NUWUxFX1RZUEUgPSBleHBvcnRzLkxJU1RfU1RZTEVfUE9TSVRJT04gPSB1bmRlZmluZWQ7XG5cbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vYmFja2dyb3VuZCcpO1xuXG52YXIgTElTVF9TVFlMRV9QT1NJVElPTiA9IGV4cG9ydHMuTElTVF9TVFlMRV9QT1NJVElPTiA9IHtcbiAgICBJTlNJREU6IDAsXG4gICAgT1VUU0lERTogMVxufTtcblxudmFyIExJU1RfU1RZTEVfVFlQRSA9IGV4cG9ydHMuTElTVF9TVFlMRV9UWVBFID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIERJU0M6IDAsXG4gICAgQ0lSQ0xFOiAxLFxuICAgIFNRVUFSRTogMixcbiAgICBERUNJTUFMOiAzLFxuICAgIENKS19ERUNJTUFMOiA0LFxuICAgIERFQ0lNQUxfTEVBRElOR19aRVJPOiA1LFxuICAgIExPV0VSX1JPTUFOOiA2LFxuICAgIFVQUEVSX1JPTUFOOiA3LFxuICAgIExPV0VSX0dSRUVLOiA4LFxuICAgIExPV0VSX0FMUEhBOiA5LFxuICAgIFVQUEVSX0FMUEhBOiAxMCxcbiAgICBBUkFCSUNfSU5ESUM6IDExLFxuICAgIEFSTUVOSUFOOiAxMixcbiAgICBCRU5HQUxJOiAxMyxcbiAgICBDQU1CT0RJQU46IDE0LFxuICAgIENKS19FQVJUSExZX0JSQU5DSDogMTUsXG4gICAgQ0pLX0hFQVZFTkxZX1NURU06IDE2LFxuICAgIENKS19JREVPR1JBUEhJQzogMTcsXG4gICAgREVWQU5BR0FSSTogMTgsXG4gICAgRVRISU9QSUNfTlVNRVJJQzogMTksXG4gICAgR0VPUkdJQU46IDIwLFxuICAgIEdVSkFSQVRJOiAyMSxcbiAgICBHVVJNVUtISTogMjIsXG4gICAgSEVCUkVXOiAyMixcbiAgICBISVJBR0FOQTogMjMsXG4gICAgSElSQUdBTkFfSVJPSEE6IDI0LFxuICAgIEpBUEFORVNFX0ZPUk1BTDogMjUsXG4gICAgSkFQQU5FU0VfSU5GT1JNQUw6IDI2LFxuICAgIEtBTk5BREE6IDI3LFxuICAgIEtBVEFLQU5BOiAyOCxcbiAgICBLQVRBS0FOQV9JUk9IQTogMjksXG4gICAgS0hNRVI6IDMwLFxuICAgIEtPUkVBTl9IQU5HVUxfRk9STUFMOiAzMSxcbiAgICBLT1JFQU5fSEFOSkFfRk9STUFMOiAzMixcbiAgICBLT1JFQU5fSEFOSkFfSU5GT1JNQUw6IDMzLFxuICAgIExBTzogMzQsXG4gICAgTE9XRVJfQVJNRU5JQU46IDM1LFxuICAgIE1BTEFZQUxBTTogMzYsXG4gICAgTU9OR09MSUFOOiAzNyxcbiAgICBNWUFOTUFSOiAzOCxcbiAgICBPUklZQTogMzksXG4gICAgUEVSU0lBTjogNDAsXG4gICAgU0lNUF9DSElORVNFX0ZPUk1BTDogNDEsXG4gICAgU0lNUF9DSElORVNFX0lORk9STUFMOiA0MixcbiAgICBUQU1JTDogNDMsXG4gICAgVEVMVUdVOiA0NCxcbiAgICBUSEFJOiA0NSxcbiAgICBUSUJFVEFOOiA0NixcbiAgICBUUkFEX0NISU5FU0VfRk9STUFMOiA0NyxcbiAgICBUUkFEX0NISU5FU0VfSU5GT1JNQUw6IDQ4LFxuICAgIFVQUEVSX0FSTUVOSUFOOiA0OSxcbiAgICBESVNDTE9TVVJFX09QRU46IDUwLFxuICAgIERJU0NMT1NVUkVfQ0xPU0VEOiA1MVxufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlVHlwZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGVUeXBlID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGVUeXBlKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZGlzYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0M7XG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNJUkNMRTtcbiAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU1FVQVJFO1xuICAgICAgICBjYXNlICdkZWNpbWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVDSU1BTDtcbiAgICAgICAgY2FzZSAnY2prLWRlY2ltYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfREVDSU1BTDtcbiAgICAgICAgY2FzZSAnZGVjaW1hbC1sZWFkaW5nLXplcm8nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERUNJTUFMX0xFQURJTkdfWkVSTztcbiAgICAgICAgY2FzZSAnbG93ZXItcm9tYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9ST01BTjtcbiAgICAgICAgY2FzZSAndXBwZXItcm9tYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9ST01BTjtcbiAgICAgICAgY2FzZSAnbG93ZXItZ3JlZWsnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9HUkVFSztcbiAgICAgICAgY2FzZSAnbG93ZXItYWxwaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9BTFBIQTtcbiAgICAgICAgY2FzZSAndXBwZXItYWxwaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9BTFBIQTtcbiAgICAgICAgY2FzZSAnYXJhYmljLWluZGljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQVJBQklDX0lORElDO1xuICAgICAgICBjYXNlICdhcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkFSTUVOSUFOO1xuICAgICAgICBjYXNlICdiZW5nYWxpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQkVOR0FMSTtcbiAgICAgICAgY2FzZSAnY2FtYm9kaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0FNQk9ESUFOO1xuICAgICAgICBjYXNlICdjamstZWFydGhseS1icmFuY2gnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfRUFSVEhMWV9CUkFOQ0g7XG4gICAgICAgIGNhc2UgJ2Nqay1oZWF2ZW5seS1zdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0hFQVZFTkxZX1NURU07XG4gICAgICAgIGNhc2UgJ2Nqay1pZGVvZ3JhcGhpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQztcbiAgICAgICAgY2FzZSAnZGV2YW5hZ2FyaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFVkFOQUdBUkk7XG4gICAgICAgIGNhc2UgJ2V0aGlvcGljLW51bWVyaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5FVEhJT1BJQ19OVU1FUklDO1xuICAgICAgICBjYXNlICdnZW9yZ2lhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdFT1JHSUFOO1xuICAgICAgICBjYXNlICdndWphcmF0aSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJO1xuICAgICAgICBjYXNlICdndXJtdWtoaSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdVUk1VS0hJO1xuICAgICAgICBjYXNlICdoZWJyZXcnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5IRUJSRVc7XG4gICAgICAgIGNhc2UgJ2hpcmFnYW5hJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE7XG4gICAgICAgIGNhc2UgJ2hpcmFnYW5hLWlyb2hhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSElSQUdBTkFfSVJPSEE7XG4gICAgICAgIGNhc2UgJ2phcGFuZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAnamFwYW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5KQVBBTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAna2FubmFkYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBTk5BREE7XG4gICAgICAgIGNhc2UgJ2thdGFrYW5hJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkE7XG4gICAgICAgIGNhc2UgJ2thdGFrYW5hLWlyb2hhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkFfSVJPSEE7XG4gICAgICAgIGNhc2UgJ2tobWVyJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0hNRVI7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5ndWwtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5qYS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMO1xuICAgICAgICBjYXNlICdrb3JlYW4taGFuamEtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2xhbyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxBTztcbiAgICAgICAgY2FzZSAnbG93ZXItYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnbWFsYXlhbGFtJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTUFMQVlBTEFNO1xuICAgICAgICBjYXNlICdtb25nb2xpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU47XG4gICAgICAgIGNhc2UgJ215YW5tYXInOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NWUFOTUFSO1xuICAgICAgICBjYXNlICdvcml5YSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk9SSVlBO1xuICAgICAgICBjYXNlICdwZXJzaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjtcbiAgICAgICAgY2FzZSAnc2ltcC1jaGluZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3NpbXAtY2hpbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAndGFtaWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UQU1JTDtcbiAgICAgICAgY2FzZSAndGVsdWd1JzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEVMVUdVO1xuICAgICAgICBjYXNlICd0aGFpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVEhBSTtcbiAgICAgICAgY2FzZSAndGliZXRhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRJQkVUQU47XG4gICAgICAgIGNhc2UgJ3RyYWQtY2hpbmVzZS1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICd0cmFkLWNoaW5lc2UtaW5mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfSU5GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3VwcGVyLWFybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ2Rpc2Nsb3N1cmUtb3Blbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0NMT1NVUkVfT1BFTjtcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1jbG9zZWQnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDTE9TVVJFX0NMT1NFRDtcbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk5PTkU7XG4gICAgfVxufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlKHN0eWxlKSB7XG4gICAgdmFyIGxpc3RTdHlsZUltYWdlID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLWltYWdlJykpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RTdHlsZVR5cGU6IHBhcnNlTGlzdFN0eWxlVHlwZShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLXR5cGUnKSksXG4gICAgICAgIGxpc3RTdHlsZUltYWdlOiBsaXN0U3R5bGVJbWFnZS5sZW5ndGggPyBsaXN0U3R5bGVJbWFnZVswXSA6IG51bGwsXG4gICAgICAgIGxpc3RTdHlsZVBvc2l0aW9uOiBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtcG9zaXRpb24nKSlcbiAgICB9O1xufTtcblxudmFyIHBhcnNlTGlzdFN0eWxlUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdpbnNpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfUE9TSVRJT04uSU5TSURFO1xuICAgICAgICBjYXNlICdvdXRzaWRlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1BPU0lUSU9OLk9VVFNJREU7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VNYXJnaW4gPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTSURFUyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5cbnZhciBwYXJzZU1hcmdpbiA9IGV4cG9ydHMucGFyc2VNYXJnaW4gPSBmdW5jdGlvbiBwYXJzZU1hcmdpbihzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi0nICsgc2lkZSkpO1xuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBPVkVSRkxPVyA9IGV4cG9ydHMuT1ZFUkZMT1cgPSB7XG4gICAgVklTSUJMRTogMCxcbiAgICBISURERU46IDEsXG4gICAgU0NST0xMOiAyLFxuICAgIEFVVE86IDNcbn07XG5cbnZhciBwYXJzZU92ZXJmbG93ID0gZXhwb3J0cy5wYXJzZU92ZXJmbG93ID0gZnVuY3Rpb24gcGFyc2VPdmVyZmxvdyhvdmVyZmxvdykge1xuICAgIHN3aXRjaCAob3ZlcmZsb3cpIHtcbiAgICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5ISURERU47XG4gICAgICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuU0NST0xMO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5BVVRPO1xuICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5WSVNJQkxFO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgT1ZFUkZMT1dfV1JBUCA9IGV4cG9ydHMuT1ZFUkZMT1dfV1JBUCA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQlJFQUtfV09SRDogMVxufTtcblxudmFyIHBhcnNlT3ZlcmZsb3dXcmFwID0gZXhwb3J0cy5wYXJzZU92ZXJmbG93V3JhcCA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3dXcmFwKG92ZXJmbG93KSB7XG4gICAgc3dpdGNoIChvdmVyZmxvdykge1xuICAgICAgICBjYXNlICdicmVhay13b3JkJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPV19XUkFQLkJSRUFLX1dPUkQ7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1dfV1JBUC5OT1JNQUw7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VQYWRkaW5nID0gZXhwb3J0cy5QQURESU5HX1NJREVTID0gdW5kZWZpbmVkO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUEFERElOR19TSURFUyA9IGV4cG9ydHMuUEFERElOR19TSURFUyA9IHtcbiAgICBUT1A6IDAsXG4gICAgUklHSFQ6IDEsXG4gICAgQk9UVE9NOiAyLFxuICAgIExFRlQ6IDNcbn07XG5cbnZhciBTSURFUyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5cbnZhciBwYXJzZVBhZGRpbmcgPSBleHBvcnRzLnBhcnNlUGFkZGluZyA9IGZ1bmN0aW9uIHBhcnNlUGFkZGluZyhzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctJyArIHNpZGUpKTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUE9TSVRJT04gPSBleHBvcnRzLlBPU0lUSU9OID0ge1xuICAgIFNUQVRJQzogMCxcbiAgICBSRUxBVElWRTogMSxcbiAgICBBQlNPTFVURTogMixcbiAgICBGSVhFRDogMyxcbiAgICBTVElDS1k6IDRcbn07XG5cbnZhciBwYXJzZVBvc2l0aW9uID0gZXhwb3J0cy5wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAncmVsYXRpdmUnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLlJFTEFUSVZFO1xuICAgICAgICBjYXNlICdhYnNvbHV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uQUJTT0xVVEU7XG4gICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5GSVhFRDtcbiAgICAgICAgY2FzZSAnc3RpY2t5JzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5TVElDS1k7XG4gICAgfVxuXG4gICAgcmV0dXJuIFBPU0lUSU9OLlNUQVRJQztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlVGV4dERlY29yYXRpb24gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9MSU5FID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT04gPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9TVFlMRSA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4uL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fU1RZTEUgPSB7XG4gICAgU09MSUQ6IDAsXG4gICAgRE9VQkxFOiAxLFxuICAgIERPVFRFRDogMixcbiAgICBEQVNIRUQ6IDMsXG4gICAgV0FWWTogNFxufTtcblxudmFyIFRFWFRfREVDT1JBVElPTiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0ge1xuICAgIE5PTkU6IG51bGxcbn07XG5cbnZhciBURVhUX0RFQ09SQVRJT05fTElORSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSB7XG4gICAgVU5ERVJMSU5FOiAxLFxuICAgIE9WRVJMSU5FOiAyLFxuICAgIExJTkVfVEhST1VHSDogMyxcbiAgICBCTElOSzogNFxufTtcblxudmFyIHBhcnNlTGluZSA9IGZ1bmN0aW9uIHBhcnNlTGluZShsaW5lKSB7XG4gICAgc3dpdGNoIChsaW5lKSB7XG4gICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuVU5ERVJMSU5FO1xuICAgICAgICBjYXNlICdvdmVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuT1ZFUkxJTkU7XG4gICAgICAgIGNhc2UgJ2xpbmUtdGhyb3VnaCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIO1xuICAgIH1cbiAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuQkxJTks7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUgPSBmdW5jdGlvbiBwYXJzZVRleHREZWNvcmF0aW9uTGluZShsaW5lKSB7XG4gICAgaWYgKGxpbmUgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZS5zcGxpdCgnICcpLm1hcChwYXJzZUxpbmUpO1xufTtcblxudmFyIHBhcnNlVGV4dERlY29yYXRpb25TdHlsZSA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb25TdHlsZShzdHlsZSkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnZG91YmxlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuRE9VQkxFO1xuICAgICAgICBjYXNlICdkb3R0ZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1RURUQ7XG4gICAgICAgIGNhc2UgJ2Rhc2hlZCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRBU0hFRDtcbiAgICAgICAgY2FzZSAnd2F2eSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLldBVlk7XG4gICAgfVxuICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuU09MSUQ7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvbiA9IGV4cG9ydHMucGFyc2VUZXh0RGVjb3JhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb24oc3R5bGUpIHtcbiAgICB2YXIgdGV4dERlY29yYXRpb25MaW5lID0gcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUoc3R5bGUudGV4dERlY29yYXRpb25MaW5lID8gc3R5bGUudGV4dERlY29yYXRpb25MaW5lIDogc3R5bGUudGV4dERlY29yYXRpb24pO1xuICAgIGlmICh0ZXh0RGVjb3JhdGlvbkxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTi5OT05FO1xuICAgIH1cblxuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkNvbG9yID0gc3R5bGUudGV4dERlY29yYXRpb25Db2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUudGV4dERlY29yYXRpb25Db2xvcikgOiBudWxsO1xuICAgIHZhciB0ZXh0RGVjb3JhdGlvblN0eWxlID0gcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlKHN0eWxlLnRleHREZWNvcmF0aW9uU3R5bGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dERlY29yYXRpb25MaW5lOiB0ZXh0RGVjb3JhdGlvbkxpbmUsXG4gICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IHRleHREZWNvcmF0aW9uQ29sb3IsXG4gICAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6IHRleHREZWNvcmF0aW9uU3R5bGVcbiAgICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0U2hhZG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOVU1CRVIgPSAvXihbKy1dfFxcZHxcXC4pJC9pO1xuXG52YXIgcGFyc2VUZXh0U2hhZG93ID0gZXhwb3J0cy5wYXJzZVRleHRTaGFkb3cgPSBmdW5jdGlvbiBwYXJzZVRleHRTaGFkb3codGV4dFNoYWRvdykge1xuICAgIGlmICh0ZXh0U2hhZG93ID09PSAnbm9uZScgfHwgdHlwZW9mIHRleHRTaGFkb3cgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50VmFsdWUgPSAnJztcbiAgICB2YXIgaXNMZW5ndGggPSBmYWxzZTtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFyIHNoYWRvd3MgPSBbXTtcbiAgICB2YXIgbnVtUGFyZW5zID0gMDtcbiAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgdmFyIGFwcGVuZFZhbHVlID0gZnVuY3Rpb24gYXBwZW5kVmFsdWUoKSB7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBfQ29sb3IyLmRlZmF1bHQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc0xlbmd0aCA9IGZhbHNlO1xuICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdmFyIGFwcGVuZFNoYWRvdyA9IGZ1bmN0aW9uIGFwcGVuZFNoYWRvdygpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggJiYgY29sb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNoYWRvd3MucHVzaCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgIG9mZnNldFg6IHZhbHVlc1swXSB8fCAwLFxuICAgICAgICAgICAgICAgIG9mZnNldFk6IHZhbHVlc1sxXSB8fCAwLFxuICAgICAgICAgICAgICAgIGJsdXI6IHZhbHVlc1syXSB8fCAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXMuc3BsaWNlKDAsIHZhbHVlcy5sZW5ndGgpO1xuICAgICAgICBjb2xvciA9IG51bGw7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dFNoYWRvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHRleHRTaGFkb3dbaV07XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgbnVtUGFyZW5zKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICBudW1QYXJlbnMtLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU2hhZG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgaWYgKG51bVBhcmVucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPT09IDAgJiYgTlVNQkVSLnRlc3QoYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMZW5ndGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgYXBwZW5kU2hhZG93KCk7XG5cbiAgICBpZiAoc2hhZG93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRvd3M7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFRFWFRfVFJBTlNGT1JNID0gZXhwb3J0cy5URVhUX1RSQU5TRk9STSA9IHtcbiAgICBOT05FOiAwLFxuICAgIExPV0VSQ0FTRTogMSxcbiAgICBVUFBFUkNBU0U6IDIsXG4gICAgQ0FQSVRBTElaRTogM1xufTtcblxudmFyIHBhcnNlVGV4dFRyYW5zZm9ybSA9IGV4cG9ydHMucGFyc2VUZXh0VHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUZXh0VHJhbnNmb3JtKHRleHRUcmFuc2Zvcm0pIHtcbiAgICBzd2l0Y2ggKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgY2FzZSAndXBwZXJjYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5VUFBFUkNBU0U7XG4gICAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9UUkFOU0ZPUk0uTE9XRVJDQVNFO1xuICAgICAgICBjYXNlICdjYXBpdGFsaXplJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5DQVBJVEFMSVpFO1xuICAgIH1cblxuICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5OT05FO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUcmFuc2Zvcm0gPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0b0Zsb2F0ID0gZnVuY3Rpb24gdG9GbG9hdChzKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocy50cmltKCkpO1xufTtcblxudmFyIE1BVFJJWCA9IC8obWF0cml4fG1hdHJpeDNkKVxcKCguKylcXCkvO1xuXG52YXIgcGFyc2VUcmFuc2Zvcm0gPSBleHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm0oc3R5bGUpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm1NYXRyaXgoc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm0gfHxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgc3R5bGUubXNUcmFuc2Zvcm0gfHxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgc3R5bGUub1RyYW5zZm9ybSk7XG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBwYXJzZVRyYW5zZm9ybU9yaWdpbihzdHlsZS50cmFuc2Zvcm1PcmlnaW4gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtT3JpZ2luIHx8IHN0eWxlLm1velRyYW5zZm9ybU9yaWdpbiB8fFxuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHN0eWxlLm1zVHJhbnNmb3JtT3JpZ2luIHx8XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgc3R5bGUub1RyYW5zZm9ybU9yaWdpbilcbiAgICB9O1xufTtcblxuLy8gJEZsb3dGaXhNZVxudmFyIHBhcnNlVHJhbnNmb3JtT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1PcmlnaW4ob3JpZ2luKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2ID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAnKTtcbiAgICAgICAgcmV0dXJuIFt2LCB2XTtcbiAgICB9XG4gICAgdmFyIHZhbHVlcyA9IG9yaWdpbi5zcGxpdCgnICcpLm1hcChfTGVuZ3RoMi5kZWZhdWx0LmNyZWF0ZSk7XG4gICAgcmV0dXJuIFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV07XG59O1xuXG4vLyAkRmxvd0ZpeE1lXG52YXIgcGFyc2VUcmFuc2Zvcm1NYXRyaXggPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybU1hdHJpeCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtID09PSAnbm9uZScgfHwgdHlwZW9mIHRyYW5zZm9ybSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoID0gdHJhbnNmb3JtLm1hdGNoKE1BVFJJWCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmIChtYXRjaFsxXSA9PT0gJ21hdHJpeCcpIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFsyXSwgbWF0cml4WzNdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0cml4M2QgPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4M2RbMF0sIG1hdHJpeDNkWzFdLCBtYXRyaXgzZFs0XSwgbWF0cml4M2RbNV0sIG1hdHJpeDNkWzEyXSwgbWF0cml4M2RbMTNdXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgVklTSUJJTElUWSA9IGV4cG9ydHMuVklTSUJJTElUWSA9IHtcbiAgICBWSVNJQkxFOiAwLFxuICAgIEhJRERFTjogMSxcbiAgICBDT0xMQVBTRTogMlxufTtcblxudmFyIHBhcnNlVmlzaWJpbGl0eSA9IGV4cG9ydHMucGFyc2VWaXNpYmlsaXR5ID0gZnVuY3Rpb24gcGFyc2VWaXNpYmlsaXR5KHZpc2liaWxpdHkpIHtcbiAgICBzd2l0Y2ggKHZpc2liaWxpdHkpIHtcbiAgICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgICAgIHJldHVybiBWSVNJQklMSVRZLkhJRERFTjtcbiAgICAgICAgY2FzZSAnY29sbGFwc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuQ09MTEFQU0U7XG4gICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuVklTSUJMRTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFdPUkRfQlJFQUsgPSBleHBvcnRzLldPUkRfQlJFQUsgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBCUkVBS19BTEw6ICdicmVhay1hbGwnLFxuICAgIEtFRVBfQUxMOiAna2VlcC1hbGwnXG59O1xuXG52YXIgcGFyc2VXb3JkQnJlYWsgPSBleHBvcnRzLnBhcnNlV29yZEJyZWFrID0gZnVuY3Rpb24gcGFyc2VXb3JkQnJlYWsod29yZEJyZWFrKSB7XG4gICAgc3dpdGNoICh3b3JkQnJlYWspIHtcbiAgICAgICAgY2FzZSAnYnJlYWstYWxsJzpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLkJSRUFLX0FMTDtcbiAgICAgICAgY2FzZSAna2VlcC1hbGwnOlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuS0VFUF9BTEw7XG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5OT1JNQUw7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwYXJzZVpJbmRleCA9IGV4cG9ydHMucGFyc2VaSW5kZXggPSBmdW5jdGlvbiBwYXJzZVpJbmRleCh6SW5kZXgpIHtcbiAgICB2YXIgYXV0byA9IHpJbmRleCA9PT0gJ2F1dG8nO1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dG86IGF1dG8sXG4gICAgICAgIG9yZGVyOiBhdXRvID8gMCA6IHBhcnNlSW50KHpJbmRleCwgMTApXG4gICAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4uL2RyYXdpbmcvUGF0aCcpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gcmVxdWlyZSgnLi4vcGFyc2luZy90ZXh0RGVjb3JhdGlvbicpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgYWRkQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIGNhbnZhc0dyYWRpZW50KSB7XG4gICAgdmFyIG1heFN0b3AgPSBNYXRoLm1heC5hcHBseShudWxsLCBncmFkaWVudC5jb2xvclN0b3BzLm1hcChmdW5jdGlvbiAoY29sb3JTdG9wKSB7XG4gICAgICAgIHJldHVybiBjb2xvclN0b3Auc3RvcDtcbiAgICB9KSk7XG4gICAgdmFyIGYgPSAxIC8gTWF0aC5tYXgoMSwgbWF4U3RvcCk7XG4gICAgZ3JhZGllbnQuY29sb3JTdG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvclN0b3ApIHtcbiAgICAgICAgY2FudmFzR3JhZGllbnQuYWRkQ29sb3JTdG9wKGYgKiBjb2xvclN0b3Auc3RvcCwgY29sb3JTdG9wLmNvbG9yLnRvU3RyaW5nKCkpO1xuICAgIH0pO1xufTtcblxudmFyIENhbnZhc1JlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbnZhc1JlbmRlcmVyKGNhbnZhcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FudmFzUmVuZGVyZXIpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzID8gY2FudmFzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbnZhc1JlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3Iob3B0aW9ucy53aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihvcHRpb25zLmhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy5jdHguc2NhbGUodGhpcy5vcHRpb25zLnNjYWxlLCB0aGlzLm9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vcHRpb25zLngsIC1vcHRpb25zLnkpO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICBvcHRpb25zLmxvZ2dlci5sb2coJ0NhbnZhcyByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsaXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xpcChjbGlwUGF0aHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoY2xpcFBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjbGlwUGF0aHMuZm9yRWFjaChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguY2xpcCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICBpZiAoY2xpcFBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZHJhd0ltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXdJbWFnZShpbWFnZSwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltYWdlLCBzb3VyY2UubGVmdCwgc291cmNlLnRvcCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0LCBkZXN0aW5hdGlvbi5sZWZ0LCBkZXN0aW5hdGlvbi50b3AsIGRlc3RpbmF0aW9uLndpZHRoLCBkZXN0aW5hdGlvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkcmF3U2hhcGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd1NoYXBlKHBhdGgsIGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmaWxsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGwoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXRoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGgoX3BhdGgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXRoKSkge1xuICAgICAgICAgICAgICAgIF9wYXRoLmZvckVhY2goZnVuY3Rpb24gKHBvaW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBwb2ludC50eXBlID09PSBfUGF0aC5QQVRILlZFQ1RPUiA/IHBvaW50IDogcG9pbnQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmxpbmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludC50eXBlID09PSBfUGF0aC5QQVRILkJFWklFUl9DVVJWRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmN0eC5iZXppZXJDdXJ2ZVRvKHBvaW50LnN0YXJ0Q29udHJvbC54LCBwb2ludC5zdGFydENvbnRyb2wueSwgcG9pbnQuZW5kQ29udHJvbC54LCBwb2ludC5lbmRDb250cm9sLnksIHBvaW50LmVuZC54LCBwb2ludC5lbmQueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKF9wYXRoLnggKyBfcGF0aC5yYWRpdXMsIF9wYXRoLnkgKyBfcGF0aC5yYWRpdXMsIF9wYXRoLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVjdGFuZ2xlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJMaW5lYXJHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaW5lYXJHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XG4gICAgICAgICAgICB2YXIgbGluZWFyR3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChib3VuZHMubGVmdCArIGdyYWRpZW50LmRpcmVjdGlvbi54MSwgYm91bmRzLnRvcCArIGdyYWRpZW50LmRpcmVjdGlvbi55MSwgYm91bmRzLmxlZnQgKyBncmFkaWVudC5kaXJlY3Rpb24ueDAsIGJvdW5kcy50b3AgKyBncmFkaWVudC5kaXJlY3Rpb24ueTApO1xuXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCBsaW5lYXJHcmFkaWVudCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBsaW5lYXJHcmFkaWVudDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSYWRpYWxHcmFkaWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSYWRpYWxHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHggPSBib3VuZHMubGVmdCArIGdyYWRpZW50LmNlbnRlci54O1xuICAgICAgICAgICAgdmFyIHkgPSBib3VuZHMudG9wICsgZ3JhZGllbnQuY2VudGVyLnk7XG5cbiAgICAgICAgICAgIHZhciByYWRpYWxHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIGdyYWRpZW50LnJhZGl1cy54KTtcbiAgICAgICAgICAgIGlmICghcmFkaWFsR3JhZGllbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIHJhZGlhbEdyYWRpZW50KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHJhZGlhbEdyYWRpZW50O1xuXG4gICAgICAgICAgICBpZiAoZ3JhZGllbnQucmFkaXVzLnggIT09IGdyYWRpZW50LnJhZGl1cy55KSB7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtcyBmb3IgZWxsaXB0aWNhbCByYWRpYWwgZ3JhZGllbnRcbiAgICAgICAgICAgICAgICB2YXIgbWlkWCA9IGJvdW5kcy5sZWZ0ICsgMC41ICogYm91bmRzLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBtaWRZID0gYm91bmRzLnRvcCArIDAuNSAqIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBncmFkaWVudC5yYWRpdXMueSAvIGdyYWRpZW50LnJhZGl1cy54O1xuICAgICAgICAgICAgICAgIHZhciBpbnZGID0gMSAvIGY7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShtaWRYLCBtaWRZLCBbMSwgMCwgMCwgZiwgMCwgMF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGludkYgKiAoYm91bmRzLnRvcCAtIG1pZFkpICsgbWlkWSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0ICogaW52Rik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSZXBlYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVwZWF0KHBhdGgsIGltYWdlLCBpbWFnZVNpemUsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY3R4LmNyZWF0ZVBhdHRlcm4odGhpcy5yZXNpemVJbWFnZShpbWFnZSwgaW1hZ2VTaXplKSwgJ3JlcGVhdCcpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclRleHROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRleHROb2RlKHRleHRCb3VuZHMsIGNvbG9yLCBmb250LCB0ZXh0RGVjb3JhdGlvbiwgdGV4dFNoYWRvd3MpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gW2ZvbnQuZm9udFN0eWxlLCBmb250LmZvbnRWYXJpYW50LCBmb250LmZvbnRXZWlnaHQsIGZvbnQuZm9udFNpemUsIGZvbnQuZm9udEZhbWlseV0uam9pbignICcpO1xuXG4gICAgICAgICAgICB0ZXh0Qm91bmRzLmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRleHRTaGFkb3dzICYmIHRleHQudGV4dC50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFkb3dzLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0U2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd0NvbG9yID0gdGV4dFNoYWRvdy5jb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dPZmZzZXRYID0gdGV4dFNoYWRvdy5vZmZzZXRYICogX3RoaXM0Lm9wdGlvbnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd09mZnNldFkgPSB0ZXh0U2hhZG93Lm9mZnNldFkgKiBfdGhpczQub3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93Qmx1ciA9IHRleHRTaGFkb3cuYmx1cjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsVGV4dCh0ZXh0LnRleHQsIHRleHQuYm91bmRzLmxlZnQsIHRleHQuYm91bmRzLnRvcCArIHRleHQuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFRleHQodGV4dC50ZXh0LCB0ZXh0LmJvdW5kcy5sZWZ0LCB0ZXh0LmJvdW5kcy50b3AgKyB0ZXh0LmJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dERlY29yYXRpb25Db2xvciA9IHRleHREZWNvcmF0aW9uLnRleHREZWNvcmF0aW9uQ29sb3IgfHwgY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uLnRleHREZWNvcmF0aW9uTGluZS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0RGVjb3JhdGlvbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGV4dERlY29yYXRpb25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuVU5ERVJMSU5FOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3cyBhIGxpbmUgYXQgdGhlIGJhc2VsaW5lIG9mIHRoZSBmb250XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gQXMgc29tZSBicm93c2VycyBkaXNwbGF5IHRoZSBsaW5lIGFzIG1vcmUgdGhhbiAxcHggaWYgdGhlIGZvbnQtc2l6ZSBpcyBiaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdGFrZSB0aGF0IGludG8gYWNjb3VudCBib3RoIGluIHBvc2l0aW9uIGFuZCBzaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3B0aW9ucyRmb250TWV0cmljcyQgPSBfdGhpczQub3B0aW9ucy5mb250TWV0cmljcy5nZXRNZXRyaWNzKGZvbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmUgPSBfb3B0aW9ucyRmb250TWV0cmljcyQuYmFzZWxpbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLnJvdW5kKHRleHQuYm91bmRzLnRvcCArIGJhc2VsaW5lKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLnJvdW5kKHRleHQuYm91bmRzLnRvcCksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHRyeSBhbmQgZmluZCBleGFjdCBwb3NpdGlvbiBmb3IgbGluZS10aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3B0aW9ucyRmb250TWV0cmljcyQyID0gX3RoaXM0Lm9wdGlvbnMuZm9udE1ldHJpY3MuZ2V0TWV0cmljcyhmb250KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZSA9IF9vcHRpb25zJGZvbnRNZXRyaWNzJDIubWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZWN0YW5nbGUodGV4dC5ib3VuZHMubGVmdCwgTWF0aC5jZWlsKHRleHQuYm91bmRzLnRvcCArIG1pZGRsZSksIHRleHQuYm91bmRzLndpZHRoLCAxLCB0ZXh0RGVjb3JhdGlvbkNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNpemVJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVJbWFnZShpbWFnZSwgc2l6ZSkge1xuICAgICAgICAgICAgaWYgKGltYWdlLndpZHRoID09PSBzaXplLndpZHRoICYmIGltYWdlLmhlaWdodCA9PT0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIDAsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE9wYWNpdHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RyYW5zZm9ybScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2Zmc2V0WCwgb2Zmc2V0WSwgbWF0cml4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNmb3JtKG1hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbMl0sIG1hdHJpeFszXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0pO1xuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1vZmZzZXRYLCAtb2Zmc2V0WSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW52YXNSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzUmVuZGVyZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGb3JlaWduT2JqZWN0UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9yZWlnbk9iamVjdFJlbmRlcmVyKGVsZW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcmVpZ25PYmplY3RSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRm9yZWlnbk9iamVjdFJlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLmZsb29yKG9wdGlvbnMud2lkdGgpICogb3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iob3B0aW9ucy5oZWlnaHQpICogb3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIG9wdGlvbnMubG9nZ2VyLmxvZygnRm9yZWlnbk9iamVjdCByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgdmFyIHN2ZyA9IGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcoTWF0aC5tYXgob3B0aW9ucy53aW5kb3dXaWR0aCwgb3B0aW9ucy53aWR0aCkgKiBvcHRpb25zLnNjYWxlLCBNYXRoLm1heChvcHRpb25zLndpbmRvd0hlaWdodCwgb3B0aW9ucy5oZWlnaHQpICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5zY3JvbGxYICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5zY3JvbGxZICogb3B0aW9ucy5zY2FsZSwgdGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTZXJpYWxpemVkU1ZHKHN2ZykudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgb3B0aW9ucy53aWR0aCAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIC1vcHRpb25zLnggKiBvcHRpb25zLnNjYWxlLCAtb3B0aW9ucy55ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbnZhcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvcmVpZ25PYmplY3RSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRm9yZWlnbk9iamVjdFJlbmRlcmVyO1xudmFyIGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcgPSBleHBvcnRzLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcgPSBmdW5jdGlvbiBjcmVhdGVGb3JlaWduT2JqZWN0U1ZHKHdpZHRoLCBoZWlnaHQsIHgsIHksIG5vZGUpIHtcbiAgICB2YXIgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgICB2YXIgZm9yZWlnbk9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ2ZvcmVpZ25PYmplY3QnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgd2lkdGgpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCB4KTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgeSk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGZvcmVpZ25PYmplY3QpO1xuXG4gICAgZm9yZWlnbk9iamVjdC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBzdmc7XG59O1xuXG52YXIgbG9hZFNlcmlhbGl6ZWRTVkcgPSBleHBvcnRzLmxvYWRTZXJpYWxpemVkU1ZHID0gZnVuY3Rpb24gbG9hZFNlcmlhbGl6ZWRTVkcoc3ZnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG5cbiAgICAgICAgaW1nLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKSk7XG4gICAgfSk7XG59OyIsImltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XG5cbmNsYXNzIENhcmRzR2VuIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xzID0gMDtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZWhvbGRlcicpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuZm9ybXMuc2V0dGluZ3MudHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmdldERhdGEoKSk7XG4gICAgZG9jdW1lbnQuZm9ybXMuc2V0dGluZ3Muc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuZ2VuZXJhdGUoZSkpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZm9ybXMuc2V0dGluZ3MucmVuZGVyLCAocmFkaW8pID0+XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gKHRoaXMucGxhY2Vob2xkZXIuY2xhc3NOYW1lID0gZG9jdW1lbnQuZm9ybXMuc2V0dGluZ3MucmVuZGVyLnZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBkb2N1bWVudC5mb3Jtcy5zZXR0aW5ncy5iYXNpYy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9zcHJlYWRzaGVldHMuZ29vZ2xlLmNvbS9mZWVkcy9jZWxscy8ke2RvY3VtZW50LmZvcm1zLnNldHRpbmdzLnR5cGUudmFsdWV9LzEvcHVibGljL3ZhbHVlcz9hbHQ9anNvbi1pbi1zY3JpcHQmY2FsbGJhY2s9P2A7XG5cbiAgICAkLmdldEpTT04odXJsLCB7fSwgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuanNvbiA9IGRhdGEuZmVlZDtcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuanNvbi50aXRsZS4kdDtcbiAgICAgIHRoaXMuY29scyA9IHBhcnNlSW50KHRoaXMuanNvbi5ncyRjb2xDb3VudC4kdCk7XG4gICAgICB0aGlzLnJvd3MgPSBwYXJzZUludCh0aGlzLmpzb24uZ3Mkcm93Q291bnQuJHQpO1xuICAgICAgdGhpcy5mb3JtYXREYXRhKHRoaXMuanNvbi5lbnRyeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5wbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBjYXJkc0FyclRvQ3JlYXRlID0gdGhpcy5jYXJkc1NlbGVjdGlvbjtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2FyZHNBcnJUb0NyZWF0ZS5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZChjYXJkc0FyclRvQ3JlYXRlW3hdLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICByZW5kZXI6IGRvY3VtZW50LmZvcm1zLnNldHRpbmdzLnJlbmRlci52YWx1ZSxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgICB9KTtcblxuICAgICAgY2FyZC5jcmVhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FyZHNTZWxlY3Rpb24oKSB7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZW5kID0gdGhpcy5jYXJkcy5sZW5ndGg7XG5cbiAgICBpZiAoZG9jdW1lbnQuZm9ybXMuc2V0dGluZ3MuY2FyZHMudmFsdWUgPT09ICdzcGVjaWZpYycpIHtcbiAgICAgIGxldCBzZWxlY3Rpb25BcnIgPSBkb2N1bWVudC5mb3Jtcy5zZXR0aW5ncy5zZWxlY3Rpb24udmFsdWUuc3BsaXQoJy0nKTtcbiAgICAgIHN0YXJ0ID0gcGFyc2VJbnQoc2VsZWN0aW9uQXJyWzBdKSAtIDE7XG4gICAgICBlbmQgPSBzZWxlY3Rpb25BcnIubGVuZ3RoID4gMSA/IHBhcnNlSW50KHNlbGVjdGlvbkFyclsxXSkgOiBwYXJzZUludChzZWxlY3Rpb25BcnJbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhcmRzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgZm9ybWF0RGF0YShqc29uKSB7XG4gICAgbGV0IGNhcmQgPSB7fTtcbiAgICBsZXQgY3VycmVudFJvdyA9IG51bGw7XG5cbiAgICBmb3IgKGxldCB4ID0gdGhpcy5jb2xzOyB4IDwganNvbi5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGVudHJ5ID0ganNvblt4XTtcbiAgICAgIGxldCBjb2wgPSBlbnRyeS5ncyRjZWxsLmNvbCAtIDE7XG4gICAgICBsZXQgcm93ID0gZW50cnkuZ3MkY2VsbC5yb3cgLSAxO1xuXG4gICAgICBpZiAocm93ICE9PSBjdXJyZW50Um93KSB7XG4gICAgICAgIGlmICghdGhpcy5pc09iakVtcHR5KGNhcmQpKSB7XG4gICAgICAgICAgY2FyZC5pbmRleCA9IGN1cnJlbnRSb3c7XG4gICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGNhcmQgPSB7fTtcbiAgICAgICAgY3VycmVudFJvdyA9IHJvdztcbiAgICAgIH1cblxuICAgICAgbGV0IHR5cGUgPSBqc29uW2NvbF0uY29udGVudC4kdDtcbiAgICAgIGNhcmRbdHlwZV0gPSBlbnRyeS5jb250ZW50LiR0LnRyaW0oKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNPYmpFbXB0eShjYXJkKSkgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIGRvY3VtZW50LmZvcm1zLnNldHRpbmdzLmJhc2ljLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBpc09iakVtcHR5KG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG52YXIgY2FyZHNHZW4gPSBuZXcgQ2FyZHNHZW4oKTtcbmNhcmRzR2VuLmluaXQoKTtcbiIsImltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgZG93bmxvYWQgZnJvbSAnZG93bmxvYWRqcyc7XG5cbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkLCBzZXR0aW5ncykge1xuICAgIHRoaXMuY2FyZCA9IGNhcmQ7XG4gICAgdGhpcy5kZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICBwbGFjZWhvbGRlcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHJlbmRlcjogJ2V4cG9ydCcsXG4gICAgICB0eXBlOiAnbW9kaWZpZXInXG4gICAgfTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gYGNhcmQgY2FyZC0tJHt0aGlzLnNldHRpbmdzLnR5cGV9YDtcbiAgICBjYXJkLmlkID0gYGNhcmQtJHt0aGlzLmNhcmQuaW5kZXh9YDtcblxuICAgIGxldCBjZWxsMSA9IHRoaXMuZ2V0U2NvcmUodGhpcy5jYXJkLnB0czEpO1xuICAgIGxldCBjZWxsMiA9IHRoaXMuZ2V0U2NvcmUodGhpcy5jYXJkLnB0czIpO1xuICAgIGxldCBjZWxsMyA9IHRoaXMuZ2V0U2NvcmUodGhpcy5jYXJkLnB0czMpO1xuICAgIGxldCBjZWxsNCA9IHRoaXMuZ2V0U2NvcmUodGhpcy5jYXJkLnB0czQpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMuZm9ybWF0U3RyKHRoaXMuY2FyZC5uYW1lKTtcbiAgICBsZXQgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24odGhpcy5jYXJkKTtcblxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gc2NvcmVib2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZWJvYXJkX193cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZF9fY2VsbFwiPiR7Y2VsbDF9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZF9fY2VsbFwiPiR7Y2VsbDJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVib2FyZF9fY2VsbFwiPiR7Y2VsbDN9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3NlY3Rpb24+XG4gICAgICAgICR7YWN0aW9ufVxuICAgIGA7XG5cbiAgICB0aGlzLnByaW50KGNhcmQpO1xuICB9XG5cbiAgZ2V0U2NvcmUodmFsdWUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBjbGFzc25hbWUgPSAnaG9sZSc7XG4gICAgbGV0IHR5cGUgPSAhaXNOYU4odmFsdWUpID8gJ251bWJlcicgOiAnc3RyaW5nJztcbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgdHlwZSA9ICdkZWZhdWx0JztcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzogLy8gaXMgYSBudW1lcmljIHZhbHVlXG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICBzd2l0Y2ggKE1hdGguc2lnbih2YWx1ZSkpIHtcbiAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7IC8vIFJlbW92ZSB0aGUgJy0nIHNjb3JlIHdpbGwgYnZlIHJlZCBpbnN0ZWFkXG4gICAgICAgICAgICBjbGFzc25hbWUgPSAnbmVnYXRpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2xhc3NuYW1lID0gJ3Bvc2l0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjbGFzc25hbWUgPSAnbmV1dHJhbCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOiAvLyBEaXNwbGF5IGljb25lIGluc3RlYWQgb2YgYSB2YWx1ZVxuICAgICAgICBjbGFzc25hbWUgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBlbXB0eSBkaXNwbGF5IGEgaG9sZVxuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGh0bWwgPSBgPGRpdiBjbGFzcz1cInNjb3JlYm9hcmRfX3BvaW50ICR7Y2xhc3NuYW1lfVwiPiR7dmFsdWV9PC9kaXY+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0QWN0aW9uKGNhcmQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCB0aXRsZSA9IHR5cGVvZiBjYXJkLmFjdGlvblRpdGxlID09PSAndW5kZWZpbmVkJyA/ICcnIDogYDxzdHJvbmc+JHt0aGlzLmZvcm1hdFN0cihjYXJkLmFjdGlvblRpdGxlKX08L3N0cm9uZz5gO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHR5cGVvZiBjYXJkLmFjdGlvbkRlc2MgPT09ICd1bmRlZmluZWQnID8gJycgOiBgPHA+JHt0aGlzLmZvcm1hdFN0cihjYXJkLmFjdGlvbkRlc2MpfTwvcD5gO1xuICAgIGxldCBjbGFzc25hbWUgPSB0eXBlb2YgY2FyZC5hY3Rpb25UeXBlID09PSAndW5kZWZpbmVkJyA/ICcnIDogY2FyZC5hY3Rpb25UeXBlO1xuXG4gICAgaWYgKGNhcmQuYWN0aW9uRGVzYykge1xuICAgICAgaHRtbCA9IGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gYWN0aW9uICR7Y2xhc3NuYW1lfVwiPiR7dGl0bGV9ICR7ZGVzY3JpcHRpb259PC9zZWN0aW9uPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBmb3JtYXRTdHIoc3RyKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICd1bmRlZmluZWQnICYmIHN0ci5sZW5ndGgpIHtcbiAgICAgIHN0ciA9IHRoaXMuZml4RXhjbGFtYXRpb25NYXJrKHN0cik7XG4gICAgICBzdHIgPSB0aGlzLmF2b2lkT3JwaGFuKHN0cik7XG4gICAgICBzdHIgPSB0aGlzLnJlcGxhY2VRdW90YXRpb25NYXJrcyhzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZml4RXhjbGFtYXRpb25NYXJrKHN0cikge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBbGwoc3RyLCAnICEnLCAnJnRoaW5zcDshJyk7XG4gIH1cblxuICBhdm9pZE9ycGhhbihzdHIpIHtcbiAgICBsZXQgbiA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGlmIChuLmxlbmd0aCA+IDIpIHtcbiAgICAgIGxldCBzaXplID0gdGhpcy5zdHJMZW5ndGhXaXRob3V0RW50aXRpZXMobltuLmxlbmd0aCAtIDFdKSArIHRoaXMuc3RyTGVuZ3RoV2l0aG91dEVudGl0aWVzKG5bbi5sZW5ndGggLSAyXSk7XG4gICAgICBpZiAoc2l6ZSA8IDE2KSB7XG4gICAgICAgIC8vIGlmIHdvcmRzIGNvbWJpbmFzaW9uIGlzbid0IHRvbyBsb25nXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8gKFteIF0qKSQvLCAnJm5ic3A7JDEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmVwbGFjZVF1b3RhdGlvbk1hcmtzKHN0cikge1xuICAgIGxldCBuID0gc3RyLnNwbGl0KCdcIicpO1xuICAgIGlmIChuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgbi5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAodGhpcy5pc09kZCh4KSkge1xuICAgICAgICAgIG5beF0gPSBgPGVtPsKrJm5ic3A7JHtuW3hdfSZuYnNwO8K7PC9lbT5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdHIgPSBuLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpc09kZChuYnIpIHtcbiAgICByZXR1cm4gbmJyICUgMjtcbiAgfVxuXG4gIHJlcGxhY2VBbGwoc3RyLCBmaW5kLCByZXBsYWNlKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZmluZCwgJ2cnKSwgcmVwbGFjZSk7XG4gIH1cblxuICBzdHJMZW5ndGhXaXRob3V0RW50aXRpZXMoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUwubGVuZ3RoO1xuICB9XG5cbiAgcHJpbnQoY2FyZCkge1xuICAgIHRoaXMuc2V0dGluZ3MucGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5yZW5kZXIgPT09ICdleHBvcnQnKSB7XG4gICAgICBodG1sMmNhbnZhcyhjYXJkKS50aGVuKChjYW52YXMpID0+IHtcbiAgICAgICAgbGV0IHNyYyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAxLjApO1xuICAgICAgICBkb3dubG9hZChzcmMsIGAke2NhcmQuaWR9LmpwZ2AsICdpbWFnZS9qcGVnJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2FyZCBhcyBkZWZhdWx0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
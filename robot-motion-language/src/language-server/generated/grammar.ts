/******************************************************************************
 * This file was generated by langium-cli 0.5.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { loadGrammarFromJson, Grammar } from 'langium';

let loadedRobotMotionLanguageGrammar: Grammar | undefined;
export const RobotMotionLanguageGrammar = (): Grammar => loadedRobotMotionLanguageGrammar ?? (loadedRobotMotionLanguageGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "RobotMotionLanguage",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Model",
      "entry": true,
      "definition": {
        "$type": "Assignment",
        "feature": "def",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "Def"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Def",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "define"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "stmts",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Move"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "MultiMove"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Repeat"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Repeat",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "repeat"
          },
          {
            "$type": "Assignment",
            "feature": "amount",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "NUMBER"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "stmtsToRepeat",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Move"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "MultiMove"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MultiMove",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "multimove"
          },
          {
            "$type": "Assignment",
            "feature": "compositeMoves",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Move"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Move",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "move"
          },
          {
            "$type": "Assignment",
            "feature": "side",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "SIDE"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "joint",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "JOINT"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "rotation",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ROT"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "to"
          },
          {
            "$type": "Assignment",
            "feature": "position",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "NUMBER"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[+-]?[0-9]+(\\\\.[0-9]*)?"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "SIDE",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "right"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "left"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "JOINT",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalAlternatives",
                        "elements": [
                          {
                            "$type": "TerminalAlternatives",
                            "elements": [
                              {
                                "$type": "TerminalAlternatives",
                                "elements": [
                                  {
                                    "$type": "TerminalAlternatives",
                                    "elements": [
                                      {
                                        "$type": "TerminalAlternatives",
                                        "elements": [
                                          {
                                            "$type": "CharacterRange",
                                            "left": {
                                              "$type": "Keyword",
                                              "value": "head"
                                            }
                                          },
                                          {
                                            "$type": "CharacterRange",
                                            "left": {
                                              "$type": "Keyword",
                                              "value": "fingers"
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "$type": "CharacterRange",
                                        "left": {
                                          "$type": "Keyword",
                                          "value": "wrist"
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "$type": "CharacterRange",
                                    "left": {
                                      "$type": "Keyword",
                                      "value": "elbow"
                                    }
                                  }
                                ]
                              },
                              {
                                "$type": "CharacterRange",
                                "left": {
                                  "$type": "Keyword",
                                  "value": "shoulder"
                                }
                              }
                            ]
                          },
                          {
                            "$type": "CharacterRange",
                            "left": {
                              "$type": "Keyword",
                              "value": "torso"
                            }
                          }
                        ]
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "hip"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "knee"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "ankle"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "toes"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "ROT",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "pitch"
                }
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "roll"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "yaw"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));

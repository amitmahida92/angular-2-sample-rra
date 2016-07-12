System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BASE_URL, APIS;
    return {
        setters:[],
        execute: function() {
            BASE_URL = "http://rsdc005/node/rcaservice";
            exports_1("APIS", APIS = {
                AUTH_USER: BASE_URL + "/auth/login/id",
                ADD_ISSUE: BASE_URL + "/saveRecord",
                HTTP_METHODS: { "GET": "GET", "POST": "POST" },
                USER: "",
                LIST_ISSUES: BASE_URL + "/getRecord/",
                GET_ISSUE: BASE_URL + "/updateRecord/",
                UPDATE_ISSUE: BASE_URL + "/updateIssue/",
                DELETE_ISSUE: BASE_URL + "/deleteIssue/",
                OPTIONS: {
                    "ISSUES_TYPES": [
                        "New",
                        "Reopen",
                        "Task",
                        "Bug",
                        "New Feature",
                        "Improvement",
                        "Epic",
                        "Story",
                        "Change Request"
                    ],
                    "RCA_TYPES": [
                        'Lack of Domain Knowledge',
                        'Improper Algorithm',
                        'Lack of Technical Knowledge',
                        'Requirements Understanding Issue',
                        'Wrong Assumption in Requirements',
                        'Ambiguity in Requirements',
                        'Validations not defined properly',
                        'Missing Requirements',
                        'Compatibility of S/W, H/D Etc',
                        'Settings of the system resolution',
                        'Limitations of the component',
                        'Ambiguous design',
                        'Inconsistency between design and requirement',
                        'Incorrect usage of design tool',
                        'Database design not done properly',
                        'Deployment was not done properly',
                        'Build Issue',
                        'Version Issue',
                        'Instruction not proper in deployment document',
                        'Environment Issues',
                        'Data Issue',
                        'Coding mistake',
                        'Existing Bug',
                        'Requirement changed'
                    ]
                }
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map
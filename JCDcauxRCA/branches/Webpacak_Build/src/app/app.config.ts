/**
 * Global Storage
 */
interface Apis {
    USER: any;
    AUTH_USER: string;
    ADD_ISSUE: string;
    LIST_ISSUES: string;
    GET_ISSUE: string;
    UPDATE_ISSUE: string;
    DELETE_ISSUE: string;
    HTTP_METHODS: any;
    OPTIONS: any;
    SEARCH_ON_DATES: any;
}

var BASE_URL = 'http://172.16.3.190:2323/node/rcaservice';

export var APIS: Apis = {
    AUTH_USER: BASE_URL + '/login',
    ADD_ISSUE: BASE_URL + '/saveRecord',
    HTTP_METHODS: { 'GET': 'GET', 'POST': 'POST' },
    USER: '',
    LIST_ISSUES: BASE_URL + '/getRecord/',
    GET_ISSUE: BASE_URL + '/updateRecord/',
    UPDATE_ISSUE: BASE_URL + '/updateIssue/',
    DELETE_ISSUE: BASE_URL + '/deleteIssue/',
    SEARCH_ON_DATES : BASE_URL + '/searchIssues',
    OPTIONS: {
        'ISSUES_TYPES': [
            'New',
            'Reopen',
            'Task',
            'Bug',
            'New Feature',
            'Improvement',
            'Epic',
            'Story',
            'Change Request'
        ],
        'RCA_TYPES': [
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
};

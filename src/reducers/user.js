export default (state = {
  isFetching: false,
  isAuthenticated: false,
  authError: '',
  registerError: '',
  stage: 'wallet',
  mailAddress: '',
  startingBlock: 0,
  balance: 0,
  contacts: [],
  backupDone: false,
  backupAlreadyDone: false,
  wallet: null,
}, action) => {
  switch (action.type) {
    case 'ADD_WALLET':
      return {
        wallet: action.wallet,
        stage: action.stage,
      };
    case 'REGISTER_REQUEST':
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: true,
        registerError: '',
        startingBlock: action.data.startingBlock,
        mailAddress: action.data.mailAddress,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        isFetching: false,
        registerError: action.error,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: '',
        isAuthenticated: true,
        isFetching: action.isFetching,
        mailAddress: action.data.mailAddress,
        startingBlock: action.data.startingBlock,
      };
    case 'USER_NOT_REGISTERED':
      return {
        ...state,
        stage: action.stage,
      };
    case 'USER_IS_REGISTERED':
      return {
        ...state,
        stage: action.stage,
        startingBlock: action.data.startingBlock,
        mailAddress: action.data.mailAddress,
        ethAddress: action.data.address,
        authError: '',
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        isFetching: action.isFetching,
        authError: action.error,
        stage: action.stage,
      };
    case 'NO_CONNECTION':
    case 'WRONG_NETWORK':
    case 'UNSECURE_CONTEXT':
      return {
        ...state,
        stage: action.stage,
      };
    case 'SET_ACCOUNT':
      return {
        ...state,
        activeAccount: action.account,
      };
    case 'ACCOUNT_CHANGE':
      return {
        ...state,
        activeAccount: action.account,
        privateKey: null,
        publicKey: null,
        mailAddress: '',
        ethAddress: '',
        startingBlock: 0,
        isAuthenticated: false,
      };
    case 'NETWORK_CHANGE':
      return {
        ...state,
        network: action.network,
      };
    case 'UPDATE_BALANCE':
      return {
        ...state,
        balance: action.balance,
      };
    case 'CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.contacts,
      };
    case 'CONTACTS_UPDATE':
      return {
        ...state,
        backupDone: true,
        contacts: action.contacts,
      };
    case 'CONTACTS_IMPORT':
      return {
        ...state,
        contacts: action.contacts,
      };
    case 'CONTACTS_BACKUP_ALREADY':
      return {
        ...state,
        backupAlreadyDone: true,
      };
    case 'RESET_BACKUP_STATE':
      return {
        ...state,
        backupAlreadyDone: false,
        backupDone: false,
      };
    default:
      return state;
  }
};

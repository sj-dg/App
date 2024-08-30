import type {FullScreenName} from '@libs/Navigation/types';
import SCREENS from '@src/SCREENS';

const FULL_SCREEN_TO_RHP_MAPPING: Partial<Record<FullScreenName, string[]>> = {
    [SCREENS.WORKSPACE.PROFILE]: [SCREENS.WORKSPACE.NAME, SCREENS.WORKSPACE.ADDRESS, SCREENS.WORKSPACE.CURRENCY, SCREENS.WORKSPACE.DESCRIPTION, SCREENS.WORKSPACE.SHARE],
    [SCREENS.WORKSPACE.REIMBURSE]: [SCREENS.WORKSPACE.RATE_AND_UNIT, SCREENS.WORKSPACE.RATE_AND_UNIT_RATE, SCREENS.WORKSPACE.RATE_AND_UNIT_UNIT],
    [SCREENS.WORKSPACE.MEMBERS]: [
        SCREENS.WORKSPACE.INVITE,
        SCREENS.WORKSPACE.INVITE_MESSAGE,
        SCREENS.WORKSPACE.MEMBER_DETAILS,
        SCREENS.WORKSPACE.OWNER_CHANGE_CHECK,
        SCREENS.WORKSPACE.OWNER_CHANGE_SUCCESS,
        SCREENS.WORKSPACE.OWNER_CHANGE_ERROR,
        SCREENS.WORKSPACE.OWNER_CHANGE_ERROR,
        SCREENS.WORKSPACE.MEMBERS_IMPORT,
        SCREENS.WORKSPACE.MEMBERS_IMPORTED,
    ],
    [SCREENS.WORKSPACE.WORKFLOWS]: [
        SCREENS.WORKSPACE.WORKFLOWS_APPROVALS_NEW,
        SCREENS.WORKSPACE.WORKFLOWS_APPROVALS_EDIT,
        SCREENS.WORKSPACE.WORKFLOWS_APPROVALS_EXPENSES_FROM,
        SCREENS.WORKSPACE.WORKFLOWS_APPROVALS_APPROVER,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_FREQUENCY,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_MONTHLY_OFFSET,
        SCREENS.WORKSPACE.WORKFLOWS_PAYER,
    ],
    [SCREENS.WORKSPACE.ACCOUNTING.ROOT]: [
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CHART_OF_ACCOUNTS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CLASSES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_TAXES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_LOCATIONS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CUSTOMERS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_DATE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_INVOICE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT_COMPANY_CARD_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_PREFERRED_EXPORTER,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_NON_REIMBURSABLE_DEFAULT_VENDOR_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_ADVANCED,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_INVOICE_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_CHART_OF_ACCOUNTS,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_ORGANIZATION,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_CUSTOMER,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_TAXES,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_TRACKING_CATEGORIES,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_MAP_TRACKING_CATEGORY,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_EXPORT,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_EXPORT_PURCHASE_BILL_DATE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_ADVANCED,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_BILL_STATUS_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_INVOICE_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_EXPORT_PREFERRED_EXPORTER_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_BILL_PAYMENT_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_EXPORT_BANK_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_SUBSIDIARY_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_REUSE_EXISTING_CONNECTIONS,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_TOKEN_INPUT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_MAPPING,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOM_FIELD,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOM_FIELD_VIEW,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOM_FIELD_EDIT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOM_LIST_ADD,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOM_SEGMENT_ADD,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOMERS_OR_PROJECTS,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_IMPORT_CUSTOMERS_OR_PROJECTS_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_PREFERRED_EXPORTER_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_DATE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT_EXPENSES,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT_EXPENSES_DESTINATION_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT_EXPENSES_VENDOR_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT_EXPENSES_PAYABLE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPORT_EXPENSES_JOURNAL_POSTING_PREFERENCE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_RECEIVABLE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_INVOICE_ITEM_PREFERENCE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_INVOICE_ITEM_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_TAX_POSTING_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_PROVINCIAL_TAX_POSTING_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_ADVANCED,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_REIMBURSEMENT_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_COLLECTION_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_EXPENSE_REPORT_APPROVAL_LEVEL_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_VENDOR_BILL_APPROVAL_LEVEL_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_JOURNAL_ENTRY_APPROVAL_LEVEL_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_APPROVAL_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.NETSUITE_CUSTOM_FORM_ID,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_PREREQUISITES,
        SCREENS.WORKSPACE.ACCOUNTING.ENTER_SAGE_INTACCT_CREDENTIALS,
        SCREENS.WORKSPACE.ACCOUNTING.EXISTING_SAGE_INTACCT_CONNECTIONS,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_ENTITY,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_MAPPING_TYPE,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_TOGGLE_MAPPING,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_USER_DIMENSIONS,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_ADD_USER_DIMENSION,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_EDIT_USER_DIMENSION,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_EXPORT,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_PREFERRED_EXPORTER,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_EXPORT_DATE,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_REIMBURSABLE_EXPENSES,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_NON_REIMBURSABLE_EXPENSES,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_DEFAULT_VENDOR,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_NON_REIMBURSABLE_CREDIT_CARD_ACCOUNT,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_ADVANCED,
        SCREENS.WORKSPACE.ACCOUNTING.SAGE_INTACCT_PAYMENT_ACCOUNT,
        SCREENS.WORKSPACE.ACCOUNTING.CARD_RECONCILIATION,
        SCREENS.WORKSPACE.ACCOUNTING.RECONCILIATION_ACCOUNT_SETTINGS,
    ],
    [SCREENS.WORKSPACE.TAXES]: [
        SCREENS.WORKSPACE.TAXES_SETTINGS,
        SCREENS.WORKSPACE.TAX_CREATE,
        SCREENS.WORKSPACE.TAXES_SETTINGS_CUSTOM_TAX_NAME,
        SCREENS.WORKSPACE.TAXES_SETTINGS_FOREIGN_CURRENCY_DEFAULT,
        SCREENS.WORKSPACE.TAXES_SETTINGS_WORKSPACE_CURRENCY_DEFAULT,
        SCREENS.WORKSPACE.TAX_CREATE,
        SCREENS.WORKSPACE.TAX_EDIT,
        SCREENS.WORKSPACE.TAX_NAME,
        SCREENS.WORKSPACE.TAX_VALUE,
        SCREENS.WORKSPACE.TAX_CODE,
    ],
    [SCREENS.WORKSPACE.TAGS]: [
        SCREENS.WORKSPACE.TAGS_SETTINGS,
        SCREENS.WORKSPACE.TAGS_EDIT,
        SCREENS.WORKSPACE.TAG_CREATE,
        SCREENS.WORKSPACE.TAG_SETTINGS,
        SCREENS.WORKSPACE.TAG_EDIT,
        SCREENS.WORKSPACE.TAG_LIST_VIEW,
        SCREENS.WORKSPACE.TAG_GL_CODE,
    ],
    [SCREENS.WORKSPACE.CATEGORIES]: [
        SCREENS.WORKSPACE.CATEGORY_CREATE,
        SCREENS.WORKSPACE.CATEGORY_SETTINGS,
        SCREENS.WORKSPACE.CATEGORIES_IMPORT,
        SCREENS.WORKSPACE.CATEGORIES_IMPORTED,
        SCREENS.WORKSPACE.CATEGORIES_SETTINGS,
        SCREENS.WORKSPACE.CATEGORY_EDIT,
        SCREENS.WORKSPACE.CATEGORY_GL_CODE,
        SCREENS.WORKSPACE.CATEGORY_PAYROLL_CODE,
    ],
    [SCREENS.WORKSPACE.DISTANCE_RATES]: [
        SCREENS.WORKSPACE.CREATE_DISTANCE_RATE,
        SCREENS.WORKSPACE.DISTANCE_RATES_SETTINGS,
        SCREENS.WORKSPACE.DISTANCE_RATE_EDIT,
        SCREENS.WORKSPACE.DISTANCE_RATE_TAX_RECLAIMABLE_ON_EDIT,
        SCREENS.WORKSPACE.DISTANCE_RATE_TAX_RATE_EDIT,
        SCREENS.WORKSPACE.DISTANCE_RATE_DETAILS,
    ],
    [SCREENS.WORKSPACE.REPORT_FIELDS]: [
        SCREENS.WORKSPACE.REPORT_FIELDS_CREATE,
        SCREENS.WORKSPACE.REPORT_FIELDS_SETTINGS,
        SCREENS.WORKSPACE.REPORT_FIELDS_LIST_VALUES,
        SCREENS.WORKSPACE.REPORT_FIELDS_ADD_VALUE,
        SCREENS.WORKSPACE.REPORT_FIELDS_VALUE_SETTINGS,
        SCREENS.WORKSPACE.REPORT_FIELDS_EDIT_VALUE,
        SCREENS.WORKSPACE.REPORT_FIELDS_EDIT_INITIAL_VALUE,
    ],
    [SCREENS.WORKSPACE.INVOICES]: [SCREENS.WORKSPACE.INVOICES_COMPANY_NAME, SCREENS.WORKSPACE.INVOICES_COMPANY_WEBSITE],
    [SCREENS.WORKSPACE.COMPANY_CARDS]: [SCREENS.WORKSPACE.COMPANY_CARDS_SELECT_FEED],
    [SCREENS.WORKSPACE.EXPENSIFY_CARD]: [
        SCREENS.WORKSPACE.EXPENSIFY_CARD_ISSUE_NEW,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_BANK_ACCOUNT,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_SETTINGS,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_SETTINGS_ACCOUNT,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_SETTINGS_FREQUENCY,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_DETAILS,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_NAME,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_LIMIT,
        SCREENS.WORKSPACE.EXPENSIFY_CARD_LIMIT_TYPE,
    ],
    [SCREENS.WORKSPACE.RULES]: [
        SCREENS.WORKSPACE.RULES_RECEIPT_REQUIRED_AMOUNT,
        SCREENS.WORKSPACE.RULES_MAX_EXPENSE_AMOUNT,
        SCREENS.WORKSPACE.RULES_MAX_EXPENSE_AGE,
        SCREENS.WORKSPACE.RULES_BILLABLE_DEFAULT,
    ],
};

export default FULL_SCREEN_TO_RHP_MAPPING;

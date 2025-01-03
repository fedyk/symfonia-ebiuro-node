/**
 * Symfonia Node.js client
 * @see https://pomoc.symfonia.pl/ebiuro/api.html
 */

interface Company {
  id: number;
  name: string;
  nip: string;
  dir_name: string;
  dbname: string;
}

interface Currency {
  id: number
  name: string
}

interface CurrencyRate {
  id: number
  averageRate: number
  currencyDate: string
  currency: Currency
}

interface CurrencyData {
  date: string
  currenciesRates: CurrencyRate[]
}

export interface Document {
  id: number
  deleted: boolean
  state: string
  status: string
  sfStatus: string
  bookingStatus: boolean
  addedBy: {
    id: number
    name: string
  }
  uploadType: string
  company: {
    id: number
  }

  documentType?: "DOCUMENT_TYPE_SALE"
  type?: "DOCUMENT_TYPE_SALE"

  /** `intraCommunity` used in payload */
  intraCommunity: boolean
  /** `isIntraCommunity` used in response */
  isIntraCommunity: boolean

  procedureOss?: boolean
  cashAccounting: boolean
  printLang: string
  printLanguage: string
  printLayout: string
  comments: string
  issuedGross: boolean
  seller: {
    id: number | null
    name: string
    address: string
    city: string
    postcode: string
    phone: string | null
    email: string | null
    taxNumber: string
    type: number | null
    typeAsString: string
    country: string | null
    taxCountryCode: string
  }
  buyers?: Buyer[]
  buyer?: Buyer
  contractorJoin: {
    id: number
    name: string
    acronym: string
    externalId: string | null
  }
  currency: {
    name: string
    rate: number
    isCustomRate: boolean
    currencyRateDate: string
    currency?: string // after document creation
  }
  header: {
    accountingMonth: string
    issueDate: string
    issuePlace: string
    serviceDate: string
    isMonthly: boolean
    taxProcedure: any[]; // Adjust if you have more details
    evidenceType: any
  }
  details: {
    description: string
    signature: string | null
  }
  payment: {
    method: string
    deadlineDate: string
    paid: boolean
    paidAmount: number
    splitPayment: boolean
  }
  summary: {
    type: string
    net?: number
    gross?: number
    tax?: number
    netBase?: number
    grossBase?: number
    taxBase?: number
  }
  taxGroupsSummary: Array<{
    taxStake: string
    netBase: number
    grossBase: number
    taxBase: number
    net: number
    gross: number
    tax: number
  }>
  numbering: {
    id: number | null
    invoiceNumber: string
    numberingType: "CUSTOM_NUMBERING"
    sequence: number | null
  }
  positions: Position[]
  relatedDocuments: any[]; // Adjust if you have more details
  category: {
    id: number
    accountingKpirColumn: string
    name: string
    type: number
  }
  corrections: any[]; // Adjust if you have more details
  warehouse: {
    id: number | null
    status: string | null
    documentId: number | null
    allowCreateDocument: boolean
  }
  isEditable: boolean
  isCanceled: boolean
  isSystemic: boolean
  tags: any[]; // Adjust if you have more details
  verifiedBy: {
    id: number | null
    name: string | null
  }
  verifiedDate: string | null
  verifiedDateWithoutTime: string | null
  uploadedDate: string
  uploadedDateWithoutTime: string
  lastModified: string
  source: number
  generationPlan: string | null
  settlements: {
    summary: {
      amountInDefault: number
      amountPaidInDefault: number
      notConfirmedValuePaid: number
    }
    items: Array<{
      id: number
      paid: number
      charge: number
      amountInDefault: number
      amountPaidInDefault: number
      notConfirmedValuePaid: number
      state: string
      currency: {
        id: number
        name: string
      }
    }>
    state: string
  }
  isSmallTaxPayer: boolean
  workflow: {
    isInProcess: boolean
    taskAssignType: string | null
    taskAssignId: number | null
    processStepName: string | null
  }
  filename: string
  note: string | null
  discountType: "AMOUNT"
  sendmailStatus: string | null
  enveloStatus: string | null
  documentListSummary: {
    netBase: number
    taxBase: number
    grossBase: number
    net: number
    tax: number
    gross: number
  }
  costCounted: number
  costCountedBase: number
  transactionType: string
  externalAccountingStatus: string | null
  isForwardedAccountingOffice: boolean
  actualCashState: number | null
  previousCashState: number | null
  totalIncome: number | null
  totalExpenditure: number | null
  totalOperations: number | null
  cashInCount: number | null
  cashOutCount: number | null
  dateFrom: string | null
  dateTo: string | null
  cashRegisterId: number | null
  reportAccountingMonth: string | null
  reportCanBeRemoved: boolean | null
  previousReportId: number | null
  dateSentToOffice: string | null
  isCorrectable: boolean
  totalGrossFromProformaAdvances: number
  maxAmountToPay: number
  documentAddingMode: string
  documentEntryForm: "DEFAULT"
  categoryId?: number | null
  eventDescription: string
  forwardedToAccountingStatus: string
  bankAccount: {
    accountNumber: string
    bankName: string
    bankSwift: string
    countryCode: string
    type: string
    currencyCode: string
  },
}

export interface Buyer {
  id: number
  name: string
  address: string
  city: string
  postcode: string
  phone: string
  email: string | null
  taxNumber: string
  type: number
  typeAsString: string
  country: string
  countryString: string
  taxCountryCode: string | null
}

export interface Contractor {
  id: number
  email: string
  firstEmail: string
  emailsAsArray: string[]
  type: number
  typeString: string
  paymentFormatAsString: string
  contactsNotDeleted: any[]; // Adjust if you have more details
  tagsAsArray: any[]; // Adjust if you have more details
  name: string
  firstname: string
  lastname: string
  taxCountryCode: string
  taxNumber: string
  fax: string | null
  phone: string
  webPage: string | null
  street: string
  paymentType: string | null
  paymentPeriod: string | null
  note: string
  acronym: string
  incidental: boolean
  regon: string
  locality: string
  country: string
  postalCode: string
  paymentDeadline: string
  paymentDiscount: number
  receivables: number
  liabilities: number
  taxNumberClean: string
  bankAccount: any[]; // Adjust if you have more details
  category: string | null
  history: any[]; // Adjust if you have more details
  tags: any[]; // Adjust if you have more details
  priceTag: string | null
  inactive: boolean
  priceGroup: string | null
}

export interface ListContractorsResult {
  data: Contractor[]
  pagination: Pagination
}

export interface SearchDocumentsResult {
  data: Document[]
  pagination: Pagination
}

export interface PaginationParams {
  limit?: number
  page?: number
  sort?: string
  direction?: 'ASC' | 'DESC'
}

export interface SearchDocumentsFilters {
  accountingMonth?: string
  querySearch?: string
  currency?: string
  contractorId?: number
  amountStart?: number
  amountEnd?: number
  operation?: string
  eventStart?: string
  eventEnd?: string
  documentTypes?: string
  transactionType?: string
  workflowType?: string
  paymentMethods?: string
  paymentStatus?: string
  categories?: string
  uploadType?: string
  documentState?: string
  bookingStatus?: boolean
  status?: string
  sfStatus?: string
  tags?: string
  sendmailStatus?: string
  canceledStatus?: boolean
  forwardedAccountingOffice?: boolean
  splitPageNeedVerification?: boolean
  ksef?: {
    only: boolean
    statuses: string | null
    eventStart: string | null
    eventEnd: string | null
  }
}

export interface Pagination {
  last: number
  current: number
  numItemsPerPage: number
  first: number
  pageCount: number
  totalCount: number
  pageRange: number
  startPage: number
  endPage: number
  pagesInRange: number[]
  firstPageInRange: number
  lastPageInRange: number
  currentItemCount: number
  firstItemNumber: number
  lastItemNumber: number
}

export interface Position {
  discount: number
  discountAmount: number
  gross: number
  grossAfterDiscount: number
  grossAfterDiscountInBase: number
  grossInBase: number
  grossOverall: number
  vatStake: string
  net: number
  purchasePrice: number
  basePurchasePrice: number | null
  purchaseCurrencyName: string | null
  purchaseCurrencyRate: number | null
  netAfterDiscount: number
  netAfterDiscountInBase: number
  netInBase: number
  netOverall: number
  quantity: number
  taxInBase: number
  taxOverall: number
  taxOverallInBase: number
  taxStake: string
  taxedPrice: number
  currencyName: string
  currencyRate: number
  baseNet: number | null
  baseGross: number | null
  categoryId: number | null
  productId: number | null
  secondCategoryId: number | null
  name: string
  code: string
  key: string
  unit: string
  gtu: null
}

export interface CalculateInvoicePossitionsConfig {
  changedValue: string
  config: Partial<{
    discountType: string
    currencyRate: number
    currency: string
    order: string
    isMargin: boolean
    isPurchase: boolean
  }>
  items: Partial<Position>[]
}

interface CalculateInvoiceSummaryConfig {
  config: {
    summaryCalcType: "CALC_BY_POSITIONS"
    currencyRate: number
    order: "net"
    isMargin: boolean
  }
  items: Partial<Position>[]
}

interface Category {
  typeAsString: string
  id: number
  name: string
  accountingKpirColumn: string
  hidden: boolean
  description: string
  type: number
  accountingVat: string
  accountingTax: string
  rateOfCostOfObtainingIncome: number
  deductionVat: string | null
  default: boolean
  tags: string | null
  purchasePurpose: string | null
  vatSettlementType: string | null
}

export class Symfonia {
  protected token?: string

  constructor(
    protected email: string,
    protected password: string
  ) { }

  listCompanies(signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return listCompanies(token, signal)
    }, signal)
  }

  searchDocuments(companyId: number, params: PaginationParams = {}, filters: SearchDocumentsFilters = {}, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return searchDocuments(token, companyId, params, filters, signal)
    }, signal)
  }

  createContractor(companyId: number, body: Partial<Contractor>, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return createContractor(token, companyId, body, signal)
    }, signal)
  }

  getContractor(companyId: number, contractorId: number, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return getContractor(token, companyId, contractorId, signal)
    }, signal)
  }

  listContractors(companyId: number, params: PaginationParams = {}, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return listContractors(token, companyId, params, signal)
    }, signal)
  }

  listCategories(companyId: number, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return listCategories(token, companyId, signal)
    }, signal)
  }

  createDocument(companyId: number, document: Partial<Document>, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return createDocument(token, companyId, document, signal)
    }, signal)
  }

  updateDocument(companyId: number, documentId: number, document: Document, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return updateDocument(token, companyId, documentId, document, signal)
    }, signal)
  }

  getLastClosestRatesForPreviousDay(date: Date, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return getLastClosestRatesForPreviousDay(token, date, signal)
    }, signal)
  }

  calculateInvoicePossitions(config: CalculateInvoicePossitionsConfig, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return calculateInvoicePossitions(token, config, signal)
    }, signal)
  }

  calculateInvoiceSummary(config: CalculateInvoiceSummaryConfig, signal: AbortSignal) {
    return this.resolveToken(function (token) {
      return calculateInvoiceSummary(token, config, signal)
    }, signal)
  }

  protected async resolveToken<T>(callback: (token: string) => Promise<T>, signal: AbortSignal): Promise<T> {
    return Promise.resolve().then(() => {
      if (typeof this.token === "string") {
        return callback(this.token)
      }

      return this.createToken(signal).then(callback)
    }).catch((err) => {
      if (err instanceof ErrorWithCode && err.code === "99") {
        return this.createToken(signal).then(callback)
      }

      throw err
    })
  }

  protected createToken(signal: AbortSignal) {
    return createToken(this.email, this.password, signal).then(token => {
      return this.token = token
    })
  }
}

function listCompanies(token: string, signal: AbortSignal): Promise<Company[]> {
  const body = new FormData()

  body.append("mode", "get-user-company")

  return fetch("https://apps.symfonia.pl/api/user", {
    method: "POST",
    body: body,
    headers: {
      token
    },
    signal,
  }).then(parseResponse<Company[]>)
}

function searchDocuments(token: string, companyId: number, params: PaginationParams, filters: SearchDocumentsFilters, signal: AbortSignal): Promise<SearchDocumentsResult> {
  const body = JSON.stringify(filters)
  const query = new URLSearchParams()

  if ("limit" in params) {
    query.append("limit", String(params.limit))
  }

  if ("page" in params) {
    query.append("page", String(params.page))
  }

  if ("sort" in params) {
    query.append("sort", String(params.sort))
  }

  if ("direction" in params) {
    query.append("direction", String(params.direction))
  }

  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/document-advance-search?${query}`, {
    method: "POST",
    body: body,
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<SearchDocumentsResult>)
}

function createContractor(token: string, companyId: number, body: Partial<Contractor>, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/contractor`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<{
    id: number
  }>)
}

function getContractor(token: string, companyId: number, contractorId: number, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/company/${companyId}/contractor/${contractorId}`, {
    method: "GET",
    headers: {
      token: token,
    },
    signal,
  }).then(parseResponse<Contractor>)
}

function listContractors(token: string, companyId: number, params: PaginationParams, signal: AbortSignal): Promise<ListContractorsResult> {
  const query = new URLSearchParams()

  if ("limit" in params) {
    query.append("limit", String(params.limit))
  }

  if ("page" in params) {
    query.append("page", String(params.page))
  }

  if ("sort" in params) {
    query.append("sort", String(params.sort))
  }

  if ("direction" in params) {
    query.append("direction", String(params.direction))
  }

  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/contractors?${query}`, {
    method: "GET",
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<ListContractorsResult>)
}

function updateDocument(token: string, companyId: number, documentId: number, document: Document, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/document-service/${encodeURIComponent(documentId)}`, {
    method: "PUT",
    body: JSON.stringify(document),
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<Document[]>)
}

function createDocument(token: string, companyId: number, body: Partial<Document>, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/document-service`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<Document[]>).then(function (resp) {
    if (Array.isArray(resp) && resp.length === 1) {
      return resp[0]
    }

    throw new ErrorWithCode("unsupported response", {
      code: "invalid_response",
      status: 500,
      data: {
        resp: JSON.stringify(resp)
      }
    })
  })
}

function listCategories(token: string, companyId: number, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/company/${encodeURIComponent(companyId)}/category?documentType=INCOME`, {
    method: "GET",
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<Category[]>)
}


function getLastClosestRatesForPreviousDay(token: string, date: Date, signal: AbortSignal) {
  const query = new URLSearchParams({
    date: date.toISOString().split('T')[0]
  })

  return fetch(`https://apps.symfonia.pl/v2/currencies/last-closest-rates-for-previous-day?${query}`, {
    method: "GET",
    headers: {
      token: token
    },
    signal,
  }).then(parseResponse<CurrencyData>)
}

function calculateInvoicePossitions(token: string, body: CalculateInvoicePossitionsConfig, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/invoice/calculate/positions`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<{
    changedValue: string,
    config: CalculateInvoicePossitionsConfig["config"],
    items: Position[]
  }>)
}

function calculateInvoiceSummary(token: string, body: CalculateInvoiceSummaryConfig, signal: AbortSignal) {
  return fetch(`https://apps.symfonia.pl/v2/invoice/calculate/positions`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    signal,
  }).then(parseResponse<Document["summary"] & {
    taxGroupsSummary: Document["taxGroupsSummary"]
  }>)
}

function createToken(email: string, password: string, signal: AbortSignal): Promise<string> {
  const body = new FormData()

  body.append("email", email)
  body.append("password", password)

  return fetch("https://apps.symfonia.pl/api/auth", {
    method: "POST",
    body: body,
    signal,
  }).then(parseResponse<{
    msg: string
    code: number
    token?: string
  }>).then(function (resp) {
    if (typeof resp.token === "string") {
      return resp.token
    }

    throw new ErrorWithCode(resp.msg, {
      status: 500,
      code: `auth_error_${resp.code}`
    })
  })
}

function parseResponse<T>(resp: Pick<Response, "ok" | "text" | "url" | "status">): Promise<T> {
  return resp.text().then(function (text) {
    let data: any

    try {
      data = parseJSON(text)
    }
    catch (cause) {
      if (!resp.ok) {
        throw new ErrorWithCode(text, {
          code: "unknown_error",
          status: resp.status,
          data: {
            text,
            url: resp.url,
          }
        })
      }

      throw new ErrorWithCode("Unsupported response", {
        code: "unknown_response",
        status: resp.status,
        cause,
        data: {
          text,
          url: resp.url,
        }
      })
    }

    if (!resp.ok) {
      let message = "Response error"
      let code = "unknown_error"

      if (typeof data?.msg === "string") {
        message = data.msg
      }

      if (data?.code) {
        code = String(data.code)
      }

      throw new ErrorWithCode(message, {
        code,
        status: resp.status,
        data: {
          url: resp.url,
          raw: text
        }
      })
    }

    return data as T
  })
}

function parseJSON(text: string) {
  if (!text) {
    return text
  }

  if (typeof text !== "string") {
    throw new RangeError("`text` need to be a string, but it's type of " + typeof text)
  }

  try {
    return JSON.parse(text)
  }
  catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    const content = String(text).substring(0, 4096)

    throw new SyntaxError(`Could not parse JSON with err: ${message}, origin text: ${content}`)
  }
}

interface ErrorWithCodeOptions {
  code: string
  status: number
  cause?: unknown
  data?: Record<string, string | number>
}

class ErrorWithCode extends Error {
  code: string
  status: number
  cause: unknown
  data: Record<string, string | number>

  constructor(message: string, options: ErrorWithCodeOptions) {
    super(message)

    this.code = options.code
    this.status = options.status || 0
    this.cause = options.cause
    this.data = options.data || {}
  }
}

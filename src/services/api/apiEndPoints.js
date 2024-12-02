const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const API_ENDPOINTS = {
  asset: {
    list: `${BASE_URL}asset/list`,
    create: `${BASE_URL}asset/create`,
    show: (id) => `${BASE_URL}asset/show/${id}`,
    update: (id) => `${BASE_URL}asset/update/${id}`,
    status: (id) => `${BASE_URL}asset/update/status/${id}`,
    delete: (id) => `${BASE_URL}asset/delete/${id}`,
  },
  branches: {
    list: `${BASE_URL}branch/list`,
    create: `${BASE_URL}branch/create`,
    show: (id) => `${BASE_URL}branch/show/${id}`,
    update: (id) => `${BASE_URL}branch/update/${id}`,
    status: (id) => `${BASE_URL}branch/update/status/${id}`,
    delete: (id) => `${BASE_URL}branch/delete/${id}`,
  },
  bankAccount: {
    list: `${BASE_URL}bank-account/list`,
    create: `${BASE_URL}bank-account/create`,
    show: (id) => `${BASE_URL}bank-account/show/${id}`,
    update: (id) => `${BASE_URL}bank-account/update/${id}`,
    status: (id) => `${BASE_URL}bank-account/update/status/${id}`,
    delete: (id) => `${BASE_URL}bank-account/delete/${id}`,
  },
  category: {
    list: `${BASE_URL}category/list`,
    create: `${BASE_URL}category/create`,
    show: (id) => `${BASE_URL}category/show/${id}`,
    update: (id) => `${BASE_URL}category/update/${id}`,
    update: (id) => `${BASE_URL}category/update/status/${id}`,
    delete: (id) => `${BASE_URL}category/delete/${id}`,
  },
  deliveryCompany: {
    list: `${BASE_URL}delivery-company/list`,
    create: `${BASE_URL}delivery-company/create`,
    show: (id) => `${BASE_URL}delivery-company/show/${id}`,
    update: (id) => `${BASE_URL}delivery-company/update/${id}`,
    update: (id) => `${BASE_URL}delivery-company/update/status/${id}`,
    delete: (id) => `${BASE_URL}delivery-company/delete/${id}`,
  },
  employee: {
    list: `${BASE_URL}employee/list`,
    create: `${BASE_URL}employee/create`,
    show: (id) => `${BASE_URL}employee/show/${id}`,
    update: (id) => `${BASE_URL}employee/update/${id}`,
    update: (id) => `${BASE_URL}employee/update/status/${id}`,
    delete: (id) => `${BASE_URL}employee/delete/${id}`,
  },
  customer: {
    list: `${BASE_URL}customer/list`,
    create: `${BASE_URL}customer/create`,
    show: (id) => `${BASE_URL}customer/show/${id}`,
    update: (id) => `${BASE_URL}customer/update/${id}`,
    update: (id) => `${BASE_URL}customer/update/status/${id}`,
    delete: (id) => `${BASE_URL}customer/delete/${id}`,
  },
  expense: {
    list: `${BASE_URL}expense/list`,
    create: `${BASE_URL}expense/create`,
    show: (id) => `${BASE_URL}expense/show/${id}`,
    update: (id) => `${BASE_URL}expense/update/${id}`,
    update: (id) => `${BASE_URL}expense/update/status/${id}`,
    delete: (id) => `${BASE_URL}expense/delete/${id}`,
  },
  expenseType: {
    list: `${BASE_URL}expense-type/list`,
    create: `${BASE_URL}expense-type/create`,
    show: (id) => `${BASE_URL}expense-type/show/${id}`,
    update: (id) => `${BASE_URL}expense-type/update/${id}`,
    update: (id) => `${BASE_URL}expense-type/update/status/${id}`,
    delete: (id) => `${BASE_URL}expense-type/delete/${id}`,
  },
  gift: {
    list: `${BASE_URL}gift/list`,
    create: `${BASE_URL}gift/create`,
    show: (id) => `${BASE_URL}gift/show/${id}`,
    update: (id) => `${BASE_URL}gift/update/${id}`,
    update: (id) => `${BASE_URL}gift/update/status/${id}`,
    delete: (id) => `${BASE_URL}gift/delete/${id}`,
  },
  product: {
    list: `${BASE_URL}product/list`,
    create: `${BASE_URL}product/create`,
    show: (id) => `${BASE_URL}product/show/${id}`,
    update: (id) => `${BASE_URL}product/update/${id}`,
    update: (id) => `${BASE_URL}product/update/status/${id}`,
    delete: (id) => `${BASE_URL}product/delete/${id}`,
  },
  subCategory: {
    list: `${BASE_URL}sub-category/list`,
    create: `${BASE_URL}sub-category/create`,
    show: (id) => `${BASE_URL}sub-category/show/${id}`,
    update: (id) => `${BASE_URL}sub-category/update/${id}`,
    update: (id) => `${BASE_URL}sub-category/update/status/${id}`,
    delete: (id) => `${BASE_URL}sub-category/delete/${id}`,
  },
  supplier: {
    list: `${BASE_URL}supplier/list`,
    create: `${BASE_URL}supplier/create`,
    show: (id) => `${BASE_URL}supplier/show/${id}`,
    update: (id) => `${BASE_URL}supplier/update/${id}`,
    update: (id) => `${BASE_URL}supplier/update/status/${id}`,
    delete: (id) => `${BASE_URL}supplier/delete/${id}`,
  },
};

export default API_ENDPOINTS;
/**
 * Create By Meng
 * Desc: 
 */

// 行业 - 表现
export const Sector = {
  filter: [
    {
      left: "description",
      operation: "nempty"
    }
  ],
  options: {
    lang: "zh"
  },
  symbols: {
    query: {
      types: [
        "sector"
      ]
    },
    tickers: []
  },
  columns: [
    "description",
    "change",
    "Perf.W",
    "Perf.1M",
    "Perf.3M",
    "Perf.6M",
    "Perf.YTD",
    "Perf.Y"
  ],
  sort: {
    sortBy: "description",
    sortOrder: "asc"
  },
  range: [
    0,
    150
  ]
};

// 大盘股 - 表现
export const Display = {
  filter: [
    {
      left: "market_cap_basic",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR"
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "change|15",
    "change|60",
    "change|240",
    "change",
    "Perf.W",
    "Perf.1M",
    "Perf.3M",
    "Perf.6M",
    "Perf.YTD",
    "Perf.Y",
    "beta_1_year",
    "Volatility.D",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "market_cap_basic",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
};

// 大盘股 - 评价
export const Remark = {
  filter: [
    {
      left: "market_cap_basic",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR"
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "close",
    "market_cap_basic",
    "price_earnings_ttm",
    "price_revenue_ttm",
    "earnings_per_share_basic_ttm",
    "last_annual_eps",
    "enterprise_value_ebitda_ttm",
    "enterprise_value_fq",
    "total_shares_outstanding_fundamental",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode",
    "pricescale",
    "minmov",
    "fractional",
    "minmove2"
  ],
  sort: {
    sortBy: "market_cap_basic",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 大盘股 - 损益表
export const SYB = {
  filter: [
    {
      left: "market_cap_basic",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR"
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "basic_eps_net_income",
    "earnings_per_share_basic_ttm",
    "earnings_per_share_diluted_ttm",
    "ebitda",
    "gross_profit_fq",
    "gross_profit",
    "total_revenue",
    "last_annual_eps",
    "last_annual_revenue",
    "net_income",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "market_cap_basic",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 大盘股 - 资产负债表
export const ZCFZB = {
  filter: [
    {
      left: "market_cap_basic",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR"
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "current_ratio",
    "debt_to_equity",
    "net_debt",
    "quick_ratio",
    "total_assets",
    "total_debt",
    "total_current_assets",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "market_cap_basic",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 最活跃 - 表现
export const bx2 = {
  filter: [
    {
      left: "volume",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "change|15",
    "change|60",
    "change|240",
    "change",
    "Perf.W",
    "Perf.1M",
    "Perf.3M",
    "Perf.6M",
    "Perf.YTD",
    "Perf.Y",
    "beta_1_year",
    "Volatility.D",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "volume",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 最活跃 - 评价
export const pj2 = {
  filter: [
    {
      left: "volume",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "close",
    "market_cap_basic",
    "price_earnings_ttm",
    "price_revenue_ttm",
    "earnings_per_share_basic_ttm",
    "last_annual_eps",
    "enterprise_value_ebitda_ttm",
    "enterprise_value_fq",
    "total_shares_outstanding_fundamental",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode",
    "pricescale",
    "minmov",
    "fractional",
    "minmove2"
  ],
  sort: {
    sortBy: "volume",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 最活跃 - 损益表
export const sy2 = {
  filter: [
    {
      left: "volume",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "basic_eps_net_income",
    "earnings_per_share_basic_ttm",
    "earnings_per_share_diluted_ttm",
    "ebitda",
    "gross_profit_fq",
    "gross_profit",
    "total_revenue",
    "last_annual_eps",
    "last_annual_revenue",
    "net_income",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "volume",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 最活跃 - 资产负债表
export const zc2 = {
  filter: [
    {
      left: "volume",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "current_ratio",
    "debt_to_equity",
    "net_debt",
    "quick_ratio",
    "total_assets",
    "total_debt",
    "total_current_assets",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "volume",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 涨幅榜 - 表现
export const bx3 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "greater",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "change|15",
    "change|60",
    "change|240",
    "change",
    "Perf.W",
    "Perf.1M",
    "Perf.3M",
    "Perf.6M",
    "Perf.YTD",
    "Perf.Y",
    "beta_1_year",
    "Volatility.D",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 涨幅榜 - 评价
export const pj3 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "greater",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "close",
    "market_cap_basic",
    "price_earnings_ttm",
    "price_revenue_ttm",
    "earnings_per_share_basic_ttm",
    "last_annual_eps",
    "enterprise_value_ebitda_ttm",
    "enterprise_value_fq",
    "total_shares_outstanding_fundamental",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode",
    "pricescale",
    "minmov",
    "fractional",
    "minmove2"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 涨幅榜 - 损益表
export const sy3 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "greater",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "basic_eps_net_income",
    "earnings_per_share_basic_ttm",
    "earnings_per_share_diluted_ttm",
    "ebitda",
    "gross_profit_fq",
    "gross_profit",
    "total_revenue",
    "last_annual_eps",
    "last_annual_revenue",
    "net_income",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 涨幅榜 - 资产负债表
export const zc3 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "greater",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "current_ratio",
    "debt_to_equity",
    "net_debt",
    "quick_ratio",
    "total_assets",
    "total_debt",
    "total_current_assets",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "desc"
  },
  range: [
    0,
    100
  ]
}

// 跌幅榜 - 表现
export const bx4 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "less",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "change|15",
    "change|60",
    "change|240",
    "change",
    "Perf.W",
    "Perf.1M",
    "Perf.3M",
    "Perf.6M",
    "Perf.YTD",
    "Perf.Y",
    "beta_1_year",
    "Volatility.D",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "asc"
  },
  range: [
    0,
    100
  ]
}

// 跌幅榜 - 评价
export const pj4 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "less",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "close",
    "market_cap_basic",
    "price_earnings_ttm",
    "price_revenue_ttm",
    "earnings_per_share_basic_ttm",
    "last_annual_eps",
    "enterprise_value_ebitda_ttm",
    "enterprise_value_fq",
    "total_shares_outstanding_fundamental",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode",
    "pricescale",
    "minmov",
    "fractional",
    "minmove2"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "asc"
  },
  range: [
    0,
    100
  ]
}

// 跌幅榜 - 损益表
export const sy4 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "less",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "basic_eps_net_income",
    "earnings_per_share_basic_ttm",
    "earnings_per_share_diluted_ttm",
    "ebitda",
    "gross_profit_fq",
    "gross_profit",
    "total_revenue",
    "last_annual_eps",
    "last_annual_revenue",
    "net_income",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "asc"
  },
  range: [
    0,
    100
  ]
}

// 跌幅榜 - 资产负债表
export const zc4 = {
  filter: [
    {
      left: "change",
      operation: "nempty"
    },
    {
      left: "type",
      operation: "equal",
      right: "stock"
    },
    {
      left: "change",
      operation: "less",
      right: 0
    },
    {
      left: "close",
      operation: "in_range",
      right: [
        2,
        10000
      ]
    },
    {
      left: "subtype",
      operation: "equal",
      right: "common"
    }
  ],
  options: {
    lang: "zh",
    data_restrictions: "PREV_BAR",
    active_symbols_only: true
  },
  symbols: {
    query: {
      types: []
    },
    tickers: []
  },
  columns: [
    "logoid",
    "name",
    "current_ratio",
    "debt_to_equity",
    "net_debt",
    "quick_ratio",
    "total_assets",
    "total_debt",
    "total_current_assets",
    "description",
    "name",
    "type",
    "subtype",
    "update_mode"
  ],
  sort: {
    sortBy: "change",
    sortOrder: "asc"
  },
  range: [
    0,
    100
  ]
}

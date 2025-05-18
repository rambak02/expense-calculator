let expenses = [
  { id: 2, description: "1", amount: 3000, tag: "Еда", date: "2025-05-18" },
  {
    id: 3,
    description: "2",
    amount: 2000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  {
    id: 4,
    description: "3",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-15",
  },
  {
    id: 5,
    description: "4",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  {
    id: 6,
    description: "5",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-16",
  },
  { id: 7, description: "6", amount: 3000, tag: "Авто", date: "2025-05-18" },
  {
    id: 8,
    description: "7",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-17",
  },
  {
    id: 9,
    description: "8",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  {
    id: 10,
    description: "9",
    amount: 1000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  {
    id: 11,
    description: "10",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-14",
  },
  {
    id: 12,
    description: "Пуп",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  {
    id: 13,
    description: "Суп",
    amount: 3000,
    tag: "Развлечения",
    date: "2025-05-18",
  },
  { id: 14, description: "Gуп", amount: 3000, tag: "Еда", date: "2025-05-18" },
  { id: 15, description: "Пуп", amount: 3000, tag: "Еда", date: "2025-05-18" },
  { id: 16, description: "Сюп", amount: 3000, tag: "Еда", date: "2025-05-18" },
  { id: 17, description: "Sуп", amount: 3000, tag: "Еда", date: "2025-05-18" },
  { id: 18, description: "Суp", amount: 3000, tag: "Еда", date: "2025-05-18" },
  { id: 19, description: "dfd", amount: 3000, tag: "Еда", date: "2025-05-18" },
  {
    id: 20,
    description: "Суdfdfп",
    amount: 3000,
    tag: "Еда",
    date: "2025-05-18",
  },
  {
    id: 21,
    description: "Суfdп",
    amount: 3000,
    tag: "Еда",
    date: "2025-05-18",
  },
  {
    id: 22,
    description: "Суsfп",
    amount: 3000,
    tag: "Еда",
    date: "2025-05-18",
  },
  {
    id: 23,
    description: "Суdffп",
    amount: 3000,
    tag: "Еда",
    date: "2025-05-18",
  },
  {
    id: 24,
    description: "Суdfп",
    amount: 3000,
    tag: "Еда",
    date: "2025-05-18",
  },
];

/**Список категорий */
const tags = [
  "Еда",
  "Развлечения",
  "Спорт",
  "Аптека",
  "Авто",
  "Одежда",
  "Образование",
  "Супермакреты",
  "Животные",
  "Для дома",
  "Мебель",
  "Ремонт",
];

const description = document.querySelector("#description");
const amount = document.querySelector("#amount");
const tag = document.querySelector("#tag");
const date = document.querySelector("#date");

const expensesList = document.querySelector("ul");

const total = document.querySelector(".expenses-list__sum");

const tagSort = document.querySelector("#tagSort");

const dateSort = document.querySelector("#dateSort");

const paginationList = document.querySelector(".expenses-list__pagination");

let filteredExpenses = [...expenses];

/** Форматирование суммы */
function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

/** число трат на 1 странице */
let productCount = 6;
let currentPage = 1;

const renderExpenses = (array) => {
  /** Пагинация */
  const firstProductIndex = productCount * currentPage - productCount;
  const lastProductIndex = firstProductIndex + productCount;
  const productOnPage = array.slice(firstProductIndex, lastProductIndex);

  expensesList.innerHTML = "";
  productOnPage.forEach((exp, index) => {
    const expHTML = document.createElement("li");
    expHTML.className = "expenses-list__item";

    /** Форматирование даты */
    const formattedDate = new Intl.DateTimeFormat("ru-Ru").format(
      new Date(exp.date)
    );

    expHTML.innerHTML = `
            <div class = "expense-list__item-element">${exp.description}</div>
            <div class = "expense-list__item-element">${formatNumber(
              exp.amount
            )} ₽</div>
            <div class = "expense-list__item-element">${exp.tag}</div>
            <div class = "expense-list__item-element">${formattedDate}</div>
            <div class = "expense-list__item-element">
              <svg 
                onclick = "deleteExpense(${exp.id})"
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip1_56">
                    <rect
                      id="Icon"
                      rx="0.000000"
                      width="15.000000"
                      height="15.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g style="mix-blend-mode: normal">
                  <rect
                    id="Icon"
                    rx="0.000000"
                    width="15.000000"
                    height="15.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip1_56)">
                    <path
                      id="Vector"
                      d="M2 4L14 4"
                      stroke="#000000"
                      stroke-opacity="1.000000"
                      stroke-width="1.333333"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M12.66 4L12.66 13.33C12.66 14 12 14.66 11.33 14.66L4.66 14.66C4 14.66 3.33 14 3.33 13.33L3.33 4"
                      stroke="#000000"
                      stroke-opacity="1.000000"
                      stroke-width="1.333333"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M5.33 4L5.33 2.66C5.33 2 6 1.33 6.66 1.33L9.33 1.33C10 1.33 10.66 2 10.66 2.66L10.66 4"
                      stroke="#000000"
                      stroke-opacity="1.000000"
                      stroke-width="1.333333"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M6.66 7.33L6.66 11.33"
                      stroke="#000000"
                      stroke-opacity="1.000000"
                      stroke-width="1.333333"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M9.33 7.33L9.33 11.33"
                      stroke="#000000"
                      stroke-opacity="1.000000"
                      stroke-width="1.333333"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </svg>
            </div>`;

    expensesList.appendChild(expHTML);
  });
};

const renderPagination = (array) => {
  paginationList.innerHTML = "";
  const pagesCount = Math.ceil(array.length / productCount);

  for (let i = 1; i <= pagesCount; i++) {
    const pagItem = document.createElement("li");
    pagItem.classList.add("expenses-list__pagination-item");
    pagItem.textContent = i;

    if (currentPage === i) {
      pagItem.classList.add("active");
    }
    paginationList.appendChild(pagItem);
  }
};

const updatePagination = (array) => {
  paginationList.addEventListener("click", (event) => {
    if (!event.target.closest(".expenses-list__pagination-item")) {
      return;
    } else {
      currentPage = Number(event.target.textContent);
      renderExpenses(array);

      document
        .querySelectorAll(".expenses-list__pagination-item")
        .forEach((item) => {
          item.classList.remove("active");
        });
      event.target.classList.add("active");
    }
  });
};
/**  Функция подсчета итога
 * @array массив трат
 */
const calculatorTotal = (array) => {
  total.innerHTML = "";
  const result = array.reduce((total, cost) => {
    return total + cost.amount;
  }, 0);

  total.innerHTML = `Итого: ${formatNumber(result)} ₽ `;
};

/** Добавление категорий в HTML */
tags.forEach((tagName) => {
  const tagHTML = document.createElement("option");
  tagHTML.value = tagName;
  tagHTML.innerHTML = tagName;
  tag.appendChild(tagHTML);
  tagSort.appendChild(tagHTML.cloneNode(true));
});

/** Удаление трат */
const deleteExpense = (id) => {
  expenses = expenses.filter((expense) => expense.id !== id);

  filteredExpenses = filteredExpenses.filter((expense) => expense.id !== id);

  renderExpenses(filteredExpenses);
  renderPagination(filteredExpenses);
  calculatorTotal(filteredExpenses);
};
/** Добавление трат */
const addExpenses = (event) => {
  event.preventDefault();

  let isValid = true;

  /** Валидация описания */
  const descriptionBlock = document.querySelector(
    ".new-expenses__form-description"
  );
  let errorDescription = descriptionBlock.querySelector(".error");

  if (!description.value.trim()) {
    if (!errorDescription) {
      errorDescription = document.createElement("div");
      errorDescription.className = "error";
      errorDescription.textContent = "Это поле обязательно для заполнения";
      descriptionBlock.appendChild(errorDescription);
    }
    isValid = false;
  }

  /** Валидация суммы */
  const amountBlock = document.querySelector(".new-expenses__form-amount");
  let errorAmount = amountBlock.querySelector(".error");
  const amountNum = Number(amount.value);

  if (!amount.value) {
    if (!errorAmount) {
      errorAmount = document.createElement("div");
      errorAmount.className = "error";
      errorAmount.textContent = "Это поле обязательно для заполнения";
      amountBlock.appendChild(errorAmount);
    }
    isValid = false;
  } else if (isNaN(amountNum) || amountNum <= 0) {
    if (errorAmount) {
      errorAmount.textContent = "Некорректная сумма";
    } else {
      errorAmount = document.createElement("div");
      errorAmount.className = "error";
      errorAmount.textContent = "Некорректная сумма";
      amountBlock.appendChild(errorAmount);
    }
    isValid = false;
  }

  /** Валидация даты */
  const dateBlock = document.querySelector(".new-expenses__form-date");
  let errorDate = dateBlock.querySelector(".error");

  if (!date.value) {
    if (!errorDate) {
      errorDate = document.createElement("div");
      errorDate.className = "error";
      errorDate.textContent = "Укажите дату";
      dateBlock.appendChild(errorDate);
    }
    isValid = false;
  }

  /** Валидация категории */
  const tagBlock = document.querySelector(".new-expenses__form-tag");
  let errorTag = tagBlock.querySelector(".error");
  if (!tag.value) {
    if (!errorTag) {
      errorTag = document.createElement("div");
      errorTag.className = "error";
      errorTag.textContent = "Выберите категорию";
      tagBlock.appendChild(errorTag);
    }
    isValid = false;
  }

  if (!isValid) return;

  const expObj = {
    id: Math.floor(Math.random() * 1000000),
    description: description.value,
    amount: Number(amount.value),
    tag: tag.value,
    date: date.value,
  };
  expenses.push(expObj);

  renderExpenses(expenses);

  description.value = "";
  amount.value = "";
  tag.selectedIndex = 0;
  date.value = "";

  calculatorTotal(expenses);
};

/** Фильтрация трат */
const filterSort = (event) => {
  filteredExpenses = [...expenses];

  /** Фильтрация по категориям */
  if (tags.includes(event.target.value)) {
    filteredExpenses = filteredExpenses.filter(
      (exp) => exp.tag == event.target.value
    );
  }

  /** Фильтрация по дате и сумме */
  if (event.target.value === "newSort") {
    filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (event.target.value === "oldSort") {
    filteredExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (event.target.value === "expensiveSort") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
  } else if (event.target.value === "cheapSort") {
    filteredExpenses.sort((a, b) => a.amount - b.amount);
  }

  currentPage = 1;
  renderExpenses(filteredExpenses);
  renderPagination(filteredExpenses);
  calculatorTotal(filteredExpenses);
};

description.addEventListener("input", () => {
  const error = document.querySelector(
    ".new-expenses__form-description .error"
  );
  if (error && description.value.trim()) {
    error.remove();
  }
});

amount.addEventListener("input", () => {
  const error = document.querySelector(".new-expenses__form-amount .error");
  if (error && amount.value && !isNaN(Number(amount.value))) {
    error.remove();
  }
});

date.addEventListener("change", () => {
  const error = document.querySelector(".new-expenses__form-date .error");
  if (error && date.value) {
    error.remove();
  }
});

tag.addEventListener("change", () => {
  const error = document.querySelector(".new-expenses__form-tag .error");
  if (error && tag.value) {
    error.remove();
  }
});

tagSort.addEventListener("change", filterSort);
dateSort.addEventListener("change", filterSort);

const paginateListItems = document.querySelectorAll(
  ".expenses-list__pagination-item"
);
const btnNextPagination = document.querySelector("#next");
const btnPrevPagination = document.querySelector("#prev");

const handlePagination = (event) => {
  const pagesCount = Math.ceil(filteredExpenses.length / productCount);
  const currentActiveItem = document.querySelector(".active");
  let newActiveItem;

  if (event.target.closest("#next")) {
    if (currentPage >= pagesCount) return;
    newActiveItem = currentActiveItem.nextElementSibling;

    currentPage++;
  } else {
    if (currentPage <= 1) return;
    newActiveItem = currentActiveItem.previousElementSibling;

    currentPage--;
  }

  if (newActiveItem) {
    currentActiveItem.classList.remove("active");
    newActiveItem.classList.add("active");
    renderExpenses(filteredExpenses);
  }
};

btnNextPagination.addEventListener("click", handlePagination);
btnPrevPagination.addEventListener("click", handlePagination);

renderExpenses(filteredExpenses);
renderPagination(filteredExpenses);
updatePagination(filteredExpenses);
calculatorTotal(filteredExpenses);

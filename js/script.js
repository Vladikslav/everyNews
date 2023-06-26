const container = document.querySelector('.js-buttons-container');
const settingButtons = document.querySelectorAll('[data-setting-name]');
const setDataAttribute = (params, { settingTarget }) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {
    element.dataset[key] = value;
  }
};
const setButtonActive = (params) => {
  for (const [key, value] of Object.entries(params)) {
    const activeButton = Array.from(settingButtons).find((element) => element.dataset['settingName'] === key && element.classList.contains('active'));
    activeButton.classList.remove('active');
    const setButton = Array.from(settingButtons).find((element) => element.dataset['settingName'] === key && element.dataset['themeValue'] === value);
    setButton.classList.add('active');
  }
};
const applySetting = (params, setting) => {
  setDataAttribute(params, setting);
  setButtonActive(params);
};
const settingButtonClickHandler = (evt, setting) => {
  const buttons = evt.target.closest('button');
  if (!buttons) { return; }
  const params = {};
  const { settingName, themeValue } = buttons.dataset;
  params[settingName] = themeValue;
  applySetting(params, setting);
};
const init = () => {
  const setting = container.dataset;
  container.addEventListener('click', (evt) => {
    settingButtonClickHandler(evt, setting);
  });
};
init();

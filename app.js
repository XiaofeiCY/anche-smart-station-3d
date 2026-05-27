const steps = [
  {
    kicker: "01 / 05 运行中的智能检测站",
    title: "让每一座检测站智能运转",
    body: "安车以检测设备、站端系统、AI 数据能力与监管平台，构建机动车检测站整站智能化解决方案。",
    capabilities: ["车辆有序进站", "检测线持续运行", "数据实时汇聚"],
  },
  {
    kicker: "02 / 05 入口调度",
    title: "车辆进站，即刻进入智能调度",
    body: "从预约、识别、建档到排队分流，站端系统把车辆、工位和检测任务连接起来，让检测流程从入口开始变得有序。",
    capabilities: ["预约进站", "车牌识别", "工单生成", "智能分流"],
  },
  {
    kicker: "03 / 05 安全检测线",
    title: "检测线协同运行，关键项目自动采集",
    body: "制动、灯光、侧滑、底盘等检测设备与站端软件协同工作，支撑机动车安全技术检测流程稳定、标准化运行。",
    capabilities: ["制动检测", "灯光检测", "底盘扫描", "数据自动采集"],
  },
  {
    kicker: "04 / 05 新能源检测",
    title: "面向新能源车辆，构建专项检测能力",
    body: "围绕电池、高压、绝缘与运行安全，帮助检测站扩展面向未来车型的检测能力。",
    capabilities: ["电池安全", "高压系统", "绝缘检测", "异常预警"],
  },
  {
    kicker: "05 / 05 数据中控与方案 CTA",
    title: "数据汇聚成报告，也驱动整站运营",
    body: "检测数据形成 AI 车况解读、运营分析、设备状态监测和流程优化，让站长看见每一天的经营效率。",
    capabilities: ["AI 车况报告", "站长驾驶舱", "设备在线率", "获取整站方案"],
  },
];

const title = document.querySelector("#storyTitle");
const kicker = document.querySelector("#storyKicker");
const body = document.querySelector("#storyBody");
const capabilityList = document.querySelector("#capabilityList");
const panel = document.querySelector("#storyPanel");
const sections = [...document.querySelectorAll(".scroll-section")];

let activeStep = -1;

function setStep(nextStep) {
  if (nextStep === activeStep) return;
  activeStep = nextStep;

  const content = steps[nextStep];
  document.body.dataset.step = String(nextStep);
  panel.style.opacity = "0";
  panel.style.transform = window.matchMedia("(max-width: 920px)").matches
    ? "translateY(10px)"
    : "translateY(calc(-50% + 10px))";

  window.setTimeout(() => {
    kicker.textContent = content.kicker;
    title.textContent = content.title;
    body.textContent = content.body;
    capabilityList.innerHTML = content.capabilities
      .map((item) => `<li>${item}</li>`)
      .join("");
    panel.style.opacity = "1";
    panel.style.transform = window.matchMedia("(max-width: 920px)").matches
      ? "translateY(0)"
      : "translateY(-50%)";
  }, 160);
}

function updateStepFromScroll() {
  const viewportMiddle = window.scrollY + window.innerHeight * 0.5;
  let nextStep = 0;

  for (const section of sections) {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (viewportMiddle >= top && viewportMiddle < bottom) {
      nextStep = Number(section.dataset.step);
      break;
    }
  }

  setStep(nextStep);
}

window.addEventListener("scroll", updateStepFromScroll, { passive: true });
window.addEventListener("resize", updateStepFromScroll);
updateStepFromScroll();

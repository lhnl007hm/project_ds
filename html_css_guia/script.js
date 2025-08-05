document.addEventListener("DOMContentLoaded", function () {
  // Navegação entre seções
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  function showSection(hash) {
    contentSections.forEach((section) => {
      section.style.display = "none";
    });

    const activeSection = document.querySelector(hash);
    if (activeSection) {
      activeSection.style.display = "block";
    } else {
      document.querySelector("#overview").style.display = "block";
    }

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("font-bold", "text-indigo-600");
      } else {
        link.classList.remove("font-bold", "text-indigo-600");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      showSection(targetId);
      window.location.hash = targetId;
    });
  });

  window.addEventListener("hashchange", () => {
    showSection(window.location.hash || "#overview");
  });

  showSection(window.location.hash || "#overview");

  // HTML Semântico - Interação
  const semanticBlocks = document.querySelectorAll(".semantic-block");
  const semanticInfo = document.getElementById("semantic-info");
  const semanticDescriptions = {
    "semantic-header":
      "O cabeçalho da página, normalmente contém o logotipo e navegação principal.",
    "semantic-nav":
      "Seção de navegação com links para as principais partes do site.",
    "semantic-main":
      "Conteúdo principal único da página, não deve ser repetido.",
    "semantic-footer":
      "Rodapé da página, com informações de copyright e links secundários.",
  };

  semanticBlocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      semanticInfo.innerHTML = `<p class="font-semibold">${
        block.textContent
      }</p><p>${semanticDescriptions[block.id]}</p>`;
    });
  });

  // Canvas - Interação
  const canvas = document.getElementById("graphics-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    document.getElementById("draw-rect").addEventListener("click", () => {
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(10, 10, 100, 100);
    });

    document.getElementById("draw-circle").addEventListener("click", () => {
      ctx.fillStyle = "rgb(0, 0, 200)";
      ctx.beginPath();
      ctx.arc(150, 75, 50, 0, 2 * Math.PI);
      ctx.fill();
    });

    document.getElementById("clear-canvas").addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }

  // Box Model - Interação
  const boxModelDemo = document.getElementById("box-model-demo");
  const paddingSlider = document.getElementById("padding-slider");
  const borderSlider = document.getElementById("border-slider");
  const marginSlider = document.getElementById("margin-slider");

  function updateBoxModel() {
    const padding = paddingSlider.value;
    const border = borderSlider.value;
    const margin = marginSlider.value;

    document.getElementById("padding-value").textContent = padding;
    document.getElementById("border-value").textContent = border;
    document.getElementById("margin-value").textContent = margin;

    boxModelDemo.style.padding = `${padding}px`;
    boxModelDemo.style.border = `${border}px solid #000`;
    boxModelDemo.style.margin = `${margin}px`;
  }

  [paddingSlider, borderSlider, marginSlider].forEach((slider) => {
    slider.addEventListener("input", updateBoxModel);
  });
  updateBoxModel();

  // Posicionamento - Interação corrigida
  const positionedElement = document.getElementById("positioned-element");

  // Valores iniciais
  let topValue = 20;
  let rightValue = "";
  let bottomValue = "";
  let leftValue = 20;

  function updatePosition() {
    positionedElement.style.top = topValue ? `${topValue}px` : "";
    positionedElement.style.right = rightValue ? `${rightValue}px` : "";
    positionedElement.style.bottom = bottomValue ? `${bottomValue}px` : "";
    positionedElement.style.left = leftValue ? `${leftValue}px` : "";
  }

  document.getElementById("move-top").addEventListener("click", () => {
    topValue = 20;
    rightValue = "";
    bottomValue = "";
    leftValue = 20;
    updatePosition();
  });

  document.getElementById("move-right").addEventListener("click", () => {
    topValue = 20;
    rightValue = 20;
    bottomValue = "";
    leftValue = "";
    updatePosition();
  });

  document.getElementById("move-bottom").addEventListener("click", () => {
    topValue = "";
    rightValue = 20;
    bottomValue = 20;
    leftValue = "";
    updatePosition();
  });

  document.getElementById("move-left").addEventListener("click", () => {
    topValue = 20;
    rightValue = "";
    bottomValue = "";
    leftValue = 20;
    updatePosition();
  });

  // Flexbox - Interação
  const flexContainer = document.getElementById("flexbox-container");
  const flexDirection = document.getElementById("flex-direction");
  const justifyContent = document.getElementById("justify-content");
  const alignItems = document.getElementById("align-items");

  function updateFlexbox() {
    flexContainer.style.flexDirection = flexDirection.value;
    flexContainer.style.justifyContent = justifyContent.value;
    flexContainer.style.alignItems = alignItems.value;
  }

  [flexDirection, justifyContent, alignItems].forEach((control) => {
    control.addEventListener("change", updateFlexbox);
  });
  updateFlexbox();

  // Grid - Interação
  const gridContainer = document.getElementById("grid-container");
  const gridCols = document.getElementById("grid-cols");
  const gridGap = document.getElementById("grid-gap");

  function updateGrid() {
    gridContainer.style.gridTemplateColumns = gridCols.value;
    gridContainer.style.gap = `${gridGap.value}rem`;
    document.getElementById("grid-gap-value").textContent = gridGap.value;
  }

  [gridCols, gridGap].forEach((control) => {
    control.addEventListener("input", updateGrid);
  });
  updateGrid();

  // Responsivo - Interação
  function updateResponsiveInfo() {
    const width = window.innerWidth;
    document.getElementById("viewport-width").textContent = width;

    let breakpoint = "Mobile";
    let bgColor = "bg-blue-500";

    if (width >= 1024) {
      breakpoint = "Desktop";
      bgColor = "bg-green-500";
    } else if (width >= 768) {
      breakpoint = "Tablet";
      bgColor = "bg-yellow-500";
    }

    const breakpointEl = document.getElementById("breakpoint-info");
    breakpointEl.textContent = breakpoint;
    breakpointEl.className = `text-xl font-bold mt-2 text-white p-2 rounded-md ${bgColor}`;
  }

  window.addEventListener("resize", updateResponsiveInfo);
  updateResponsiveInfo();

  // Transições e Animações - Interação
  const transitionBtn = document.getElementById("transition-btn");
  transitionBtn.addEventListener("mouseenter", () => {
    transitionBtn.classList.add("bg-blue-700", "scale-105");
  });
  transitionBtn.addEventListener("mouseleave", () => {
    transitionBtn.classList.remove("bg-blue-700", "scale-105");
  });

  const animatedElement = document.getElementById("animated-element");
  let isAnimating = false;

  document.getElementById("toggle-animation").addEventListener("click", () => {
    isAnimating = !isAnimating;
    if (isAnimating) {
      animatedElement.style.animation = "pulse 2s infinite";
    } else {
      animatedElement.style.animation = "none";
    }
  });

  // DevTools - Interação
  const devtoolsTabs = document.querySelectorAll(".devtools-tab");
  const devtoolsPanes = document.querySelectorAll(".devtools-pane");

  devtoolsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      devtoolsTabs.forEach((t) =>
        t.classList.remove("text-indigo-600", "border-indigo-500")
      );
      tab.classList.add("text-indigo-600", "border-indigo-500");

      devtoolsPanes.forEach((pane) => pane.classList.add("hidden"));
      document
        .getElementById(`tab-content-${target}`)
        .classList.remove("hidden");
    });
  });

  // Função para copiar código
  function copyCode(elementId) {
    const codeBlock = document.getElementById(elementId);
    const code = codeBlock.querySelector("code").textContent;
    navigator.clipboard.writeText(code).then(() => {
      const copyButton = codeBlock.querySelector(".copy-btn");
      const originalText = copyButton.textContent;
      copyButton.textContent = "Copiado!";
      setTimeout(() => {
        copyButton.textContent = originalText;
      }, 2000);
    });
  }

  // Adiciona animação pulse via JavaScript
  const style = document.createElement("style");
  style.textContent = `
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.7; }
                }
            `;
  document.head.appendChild(style);
});

document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Modal de Login / Acesso
  const loginBtn = document.getElementById('loginBtn');
  const ctaHeaderBtn = document.getElementById('ctaHeaderBtn');
  const finalCtaBtn = document.getElementById('finalCtaBtn');
  const modalAuth = document.getElementById('modalAuth');
  const modalClose = document.getElementById('modalClose');
  const authForm = document.getElementById('authForm');
  const modalTitle = document.getElementById('modalTitle');

  function openModal(titleText = 'Acessar Xantoss Hub') {
    if (modalAuth) {
      modalTitle.textContent = titleText;
      modalAuth.classList.add('active');
    }
  }

  function closeModal() {
    if (modalAuth) {
      modalAuth.classList.remove('active');
    }
  }

  if (loginBtn) loginBtn.addEventListener('click', () => openModal('Entrar no Xantoss Hub'));
  if (ctaHeaderBtn) ctaHeaderBtn.addEventListener('click', () => openModal('Criar Conta Gratuita'));
  if (finalCtaBtn) finalCtaBtn.addEventListener('click', () => openModal('Criar Conta Gratuita'));
  
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalAuth) {
    modalAuth.addEventListener('click', (e) => {
      if (e.target === modalAuth) closeModal();
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Acesso simulado com sucesso! Bem-vindo ao Xantoss Hub.');
      closeModal();
      authForm.reset();
    });
  }

  // Xantoss AI Chat Interativo
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  const chatMessages = document.getElementById('chatMessages');
  const clearChatBtn = document.getElementById('clearChatBtn');

  const aiResponses = [
    "Com certeza! O Xantoss Hub pode automatizar esse fluxo para você em poucos minutos.",
    "Análise concluída com sucesso. Recomendo utilizar a nossa API de alta performance.",
    "Excelente pergunta! Nossa IA está treinada exatamente para otimizar esse tipo de arquitetura.",
    "Quer ajuda para escrever o código em JavaScript ou Python? Posso gerar o template agora.",
    "Potência máxima ativada! Mais alguma dúvida sobre o ecossistema Xantoss?"
  ];

  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', sender);

    const avatar = document.createElement('div');
    avatar.classList.add('msg-avatar');
    avatar.textContent = sender === 'ai' ? '⚡' : '👤';

    const content = document.createElement('div');
    content.classList.add('msg-content');
    content.textContent = text;

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);
    chatMessages.appendChild(msgDiv);

    // Auto scroll
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    // Simular resposta da IA após pequeno delay
    setTimeout(() => {
      const randomResp = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      addMessage(randomResp, 'ai');
    }, 800);
  }

  if (sendChatBtn && chatInput) {
    sendChatBtn.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage();
      }
    });
  }

  if (clearChatBtn && chatMessages) {
    clearChatBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="chat-msg ai">
          <div class="msg-avatar">⚡</div>
          <div class="msg-content">Histórico limpo. Como posso ajudar agora?</div>
        </div>
      `;
    });
  }
});
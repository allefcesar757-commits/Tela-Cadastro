document.addEventListener('DOMContentLoaded', () => {

  // 1. Botão Acessibilidade
  const accBtn = document.getElementById('btn-accessibility');
  if (accBtn) {
    accBtn.addEventListener('click', () => {
      alert('Recursos de Acessibilidade ativados.');
    });
  }

  // 2. Botão Acessar Rotas
  const routesBtn = document.getElementById('btn-routes');
  if (routesBtn) {
    routesBtn.addEventListener('click', () => {
      alert('Carregando rotas e mapa escolar...');
    });
  }

  // 3. Interação com os Cards Principais
  const academicCard = document.getElementById('btn-academic');
  const announcementsCard = document.getElementById('btn-announcements');
  const pcdCard = document.getElementById('btn-pcd');

  if (academicCard) {
    academicCard.addEventListener('click', () => {
      alert('Abrindo quadro de horários e matérias.');
    });
  }

  if (announcementsCard) {
    announcementsCard.addEventListener('click', () => {
      alert('Abrindo 2 avisos recentes.');
    });
  }

  if (pcdCard) {
    pcdCard.addEventListener('click', () => {
      alert('Abrindo opções de suporte PCD (Áudio, Texto e Libras).');
    });
  }

  // 4. Botão Pedir Ajuda
  const helpBtn = document.getElementById('btn-help');
  if (helpBtn) {
    helpBtn.addEventListener('click', () => {
      alert('Chamando suporte presencial / monitor da escola...');
    });
  }

  // 5. Navegação Inferior
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

});
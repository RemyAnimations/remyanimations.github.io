"use strict";
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) close(); });
  }
  const form = document.querySelector('#devis-form');
  if (!form) return;
  const preset = new URLSearchParams(window.location.search).get('prestation');
  const values = {mariage:'Mariage',anniversaire:'Anniversaire',soiree:'Soirée dansante',animation:'Animation / option'};
  const eventSelect = form.querySelector('#prestation');
  if (preset && values[preset]) eventSelect.value = values[preset];
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const val = name => String(data.get(name) || '').trim();
    const subject = `Demande de devis Rémy Animations — ${val('prestation')}`;
    const body = [
      'Bonjour Rémy,', '', 'Je vous contacte pour une demande de devis :', '',
      `Nom : ${val('nom')}`, `E-mail : ${val('email')}`, `Téléphone : ${val('telephone') || 'Non renseigné'}`,
      `Événement : ${val('prestation')}`, `Date : ${val('date') || 'À confirmer'}`,
      `Lieu : ${val('lieu')}`, `Invités : ${val('invites') || 'À confirmer'}`,
      `Ambiance : ${val('ambiance')}`, '', 'Précisions :', val('message') || 'À discuter', '', 'Merci et à bientôt !'
    ].join('\n');
    const mailto = `mailto:remy_animations@live.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('form-feedback').textContent = 'Votre messagerie devrait s’ouvrir avec le message préparé. Vérifiez son contenu et cliquez sur Envoyer. Si rien ne s’ouvre, écrivez directement à remy_animations@live.fr.';
    window.location.href = mailto;
  });
})();
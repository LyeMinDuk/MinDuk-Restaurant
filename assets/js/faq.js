document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.faq');

  sections.forEach(section => {
    const items = section.querySelectorAll('.faq-item');

    items.forEach(item => {
      const btn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (btn.classList.contains('open')) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }

      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');
        items.forEach(other => {
          const otherBtn = other.querySelector('.faq-question');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherBtn !== btn) {
            otherBtn.classList.remove('open');
            otherBtn.setAttribute('aria-expanded', 'false');
            otherAnswer.style.maxHeight = null;
          }
        });

        if (isOpen) {
          btn.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          btn.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });

      const ro = new ResizeObserver(() => {
        if (btn.classList.contains('open')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
      ro.observe(answer);
    });
  });
});
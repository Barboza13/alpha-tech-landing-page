export const observeCards = () => {
  const cards = document.querySelectorAll('.card')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-8')
        observer.unobserve(entry.target)
      }
    })
  })

  cards.forEach((card) => observer.observe(card))
}

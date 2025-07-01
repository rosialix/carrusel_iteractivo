document.addEventListener("DOMContentLoaded", function () {
  // Datos para el slider superior (profesionales)
  const professionalTestimonials = [
    {
      name: "Dr. Omar Ibrahimi",
      title: "MD, PhD, FAAD",
      subtitle: "Board Certified Dermatologist",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,  ",
      img: "img/photo1.png",
    },
    {
      name: "Dr. Sarah Johnson",
      title: "MD, Dermatology",
      subtitle: "Certified Specialist",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo2.png",
    },
    {
      name: "Dr. Michael Chen",
      title: "PhD, Nutrition",
      subtitle: "Clinical Researcher",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo3.png",
    },
    {
      name: "Dr. Emily Wilson",
      title: "ND, FAARM",
      subtitle: "Integrative Medicine",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo4.png",
    },
    {
      name: "Dr. James Rodriguez",
      title: "MD, MPH",
      subtitle: "Preventive Medicine",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo5.png",
    },
    {
      name: "Dr. David Kim",
      title: "DO, FAAD",
      subtitle: "Cosmetic Dermatology",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo6.png",
    },
    {
      name: "Dr. Lisa Park",
      title: "MD, PhD",
      subtitle: "Research Scientist",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo7.png",
    },
    {
      name: "Dr. Hann Petrov",
      title: "MD, Endocrinology",
      subtitle: "Hormone Specialist",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo8.png",
    },
    {
      name: "Dr. Roberta Lee",
      title: "MD, Cardiology",
      subtitle: "Preventive Cardiology",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo9.png",
    },
    {
      name: "Dr. Maria Garcia",
      title: "MD, Pediatrics",
      subtitle: "Child Nutrition",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa, ",
      img: "img/photo10.png",
    },
  ];

  // Datos para el slider inferior (clientes verificados)
  const customerTestimonials = [
    {
      name: "Dawn Turo",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Mark Johnson",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Sophia Chen",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★☆",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Carlos Mendez",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Aisha Williams",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Thomas Kim",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★☆",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Olivia Smith",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Daniel Brown",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Emma Davis",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★☆",
      img: "img/Yin_and_yang.png",
    },
    {
      name: "Ryan Wilson",
      title: "Verified Customer",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit id, magni necessitatibus atque voluptatibus nulla excepturi eaque, eveniet accusamus totam. Laboriosam ipsa,",
      rating: "★★★★★",
      img: "img/Yin_and_yang.png",
    },
  ];

  // sliders
  const topSlider = document.getElementById("topSlider");
  const bottomSlider = document.getElementById("bottomSlider");

  // Crear una card de profesional
  function createProfessionalCard(testimonial) {
    return `
            <div class="slider-card">
                    <img src="${testimonial.img}" alt="${testimonial.name}" class="user-avatar">
                    <div class="user-details">
                        <div class="user-name">${testimonial.name}</div>
                        <div class="user-title">${testimonial.title}</div>
                        <div class="user-subtitle">${testimonial.subtitle}</div>
                    </div>
                   <div class="testimonial-text"> <span></span>${testimonial.testimonial}</div>
            </div>
        `;
  }

  // Crear una card de cliente
  function createCustomerCard(testimonial) {
    return `
            <div class="slider-card">
                  <div class="img-container">
                    <img src="${testimonial.img}" alt="${testimonial.name}" class="img-yin-yan">
                    </div>
                    <div class="user-details">
                        <div class="user-name">${testimonial.name}</div>
                        <div class="box-user-title">
                            ${testimonial.title}
                        </div>
                        <div class="user-rating">${testimonial.rating}</div>
                    </div>
                <div class="testimonial-text"><span></span>${testimonial.testimonial}</div>
            </div>
        `;
  }

  // Inicializar un slider
  function initSlider(
    sliderElement,
    testimonials,
    createCardFn,
    direction = "right",
    sliderKey
  ) {
    // Duplicar los testimonios para el efecto infinito
    const duplicatedTestimonials = [
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ];

    
    sliderElement.innerHTML = duplicatedTestimonials.map(createCardFn).join("");

    // Obtener el índice  desde 0
    const lastPosition =
      parseInt(localStorage.getItem(`slider_${sliderKey}_position`)) || 0;
    const startIndex = (lastPosition + 1) % testimonials.length;

    // Calcular la posición inicial
    const cardWidth = 325; 
    let initialPosition;

    if (direction === "right") {
      initialPosition = -((testimonials.length + startIndex) * cardWidth);
    } else {
      initialPosition = -((testimonials.length * 2 - startIndex) * cardWidth);
    }

    sliderElement.style.transform = `translateX(${initialPosition}px)`;

    // Animación del slider
    let animationId;
    let position = initialPosition;
    const speed = direction === "right" ? -0.5 : 0.5;

    function animate() {
      position += speed;

 
      if (
        direction === "right" &&
        position < -(testimonials.length * 2 * cardWidth)
      ) {
        position = -(testimonials.length * cardWidth);
      } else if (
        direction === "left" &&
        position > -(testimonials.length * cardWidth)
      ) {
        position = -(testimonials.length * 2 * cardWidth);
      }

      sliderElement.style.transform = `translateX(${position}px)`;

      // Guardar posición aproximada para refrescar la página
      const currentCard =
        Math.abs(Math.round(position / cardWidth)) % testimonials.length;
      localStorage.setItem(`slider_${sliderKey}_position`, currentCard);

      animationId = requestAnimationFrame(animate);
    }

    // Iniciar animación
    animate();

    // Pausar animación al hacer hover
    sliderElement.parentElement.addEventListener("mouseenter", () => {
      cancelAnimationFrame(animationId);
    });

    sliderElement.parentElement.addEventListener("mouseleave", () => {
      animationId = requestAnimationFrame(animate);
    });
  }

  // Inicializar sliders
  initSlider(
    topSlider,
    professionalTestimonials,
    createProfessionalCard,
    "right",
    "top"
  );
  initSlider(
    bottomSlider,
    customerTestimonials,
    createCustomerCard,
    "left",
    "bottom"
  );
});

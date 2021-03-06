import debounce from './debounce.js'

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
 const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
 target.forEach(function(el) {
     if((windowTop) > el.offsetTop) {
         el.classList.add(animationClass);
         el.classList.add('active')        
     } else {
         el.classList.remove(animationClass);
         el.classList.remove('active')
     }

 })
}

animeScroll();


window.addEventListener('scroll', debounce(function() {
    animeScroll();
}, 200))


function English() {
    this.inglaterra = document.querySelector('.inglaterra')
    this.brasil = document.querySelector('.brasil')
    this.nav1 = document.querySelector('.link1')
    this.nav2 = document.querySelector('.link2')
    this.nav3 = document.querySelector('.link3')
    this.nav4 = document.querySelector('.link4')
    this.profissao = document.querySelector('.profissao')
    this.contatar = document.querySelector('.main-btn')
    this.sobre_titulo = document.querySelector('.sobre-titulo')
    this.sobre_para1 = document.querySelector('.sobre-para-1')
    this.sobre_para2 = document.querySelector('.sobre-para-2')
    this.sobre_info_titulo = document.querySelector('.sobre-info-titulo')
    this.sobre_info_p1 = document.querySelector('.sobre-info-p1')
    this.sobre_info_p2 = document.querySelector('.sobre-info-p2')
    this.sobre_info_p3 = document.querySelector('.sobre-info-p3')
    this.sobre_info_p4 = document.querySelector('.sobre-info-p4')
    this.sobre_info_p5 = document.querySelector('.sobre-info-p5')
    this.sobre_resp_p1 = document.querySelector('.sobre-resp-p1')
    this.sobre_resp_p2 = document.querySelector('.sobre-resp-p2')
    this.sobre_resp_p3 = document.querySelector('.sobre-resp-p3')
    this.sobre_resp_p4 = document.querySelector('.sobre-resp-p4')
    this.sobre_resp_p5 = document.querySelector('.sobre-resp-p5')
    this.habilidade_titulo = document.querySelector('.habilidade-titulo')
    this.habilidade_level1 = document.querySelector('.habilidade-1-level')
    this.habilidade_level2 = document.querySelector('.habilidade-2-level')
    this.habilidade_level3 = document.querySelector('.habilidade-3-level')
    this.habilidade_level4 = document.querySelector('.habilidade-4-level')
    this.portfolio_titulo = document.querySelector('.portfolio-titulo')
    this.vejamais1 = document.querySelector('.projeto-1-h4')
    this.vejamais2 = document.querySelector('.projeto-2-h4')
    this.educacao_titulo = document.querySelector('.educacao_titulo')
    this.educacao_graduacao1 = document.querySelector('.educacao-graduacao1')
    this.educacao_graduacao2 = document.querySelector('.educacao-graduacao2')
    this.educacao_graduacao_info1 = document.querySelector('.educacao-graduacao-info1')
    this.educacao_graduacao_info2 = document.querySelector('.educacao-graduacao-info2')
    this.footer_p1 = document.querySelector('.footer-p1')
    this.footer_p2 = document.querySelector('.footer-p2')
    
    
    this.inicia = () => {

        this.capturaCliques();
      };
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
          const el = e.target;
          if (el.classList.contains('inglaterra')) {
            this.inglaterra.classList.add('ativo')
            this.brasil.classList.remove('ativo')
            this.nav1.innerHTML = 'About'
            this.nav2.innerHTML = 'Skills'
            this.nav3.innerHTML = 'Portfolio'
            this.nav4.innerHTML = 'Education'
            this.profissao.innerHTML = 'Front-end Developer'
            this.contatar.innerHTML = 'Contact me'
            this.sobre_titulo.innerHTML = 'About me'
            this.sobre_para1.innerHTML = 'I am so dedicated to evolving my knowledge in this area, in addition to constantly testing myself with new challenges. I am looking for new opportunities to start my career and develop my skills in practice.'
            this.sobre_para2.innerHTML = 'Passionate about philosophy, technology and innovation.'
            this.sobre_info_titulo.innerHTML = 'Basic Information'
            this.sobre_info_p1.innerHTML = 'Age:'
            this.sobre_info_p2.innerHTML = 'EMAIL:'
            this.sobre_info_p3.innerHTML = 'PHONE:'
            this.sobre_info_p4.innerHTML =  'ADDRESS:'
            this.sobre_info_p5.innerHTML = 'LANGUAGE:'
            this.sobre_resp_p1.innerHTML = '25'
            this.sobre_resp_p2.innerHTML = 'lineulima1@gmail.com'
            this.sobre_resp_p3.innerHTML = '+55 53 999769180'
            this.sobre_resp_p4.innerHTML = 'Pelotas, Rio Grande do Sul'
            this.sobre_resp_p5.innerHTML = 'English(Intermediate), Portuguese'
            this.habilidade_titulo.innerHTML = 'Professional Skills'
            this.habilidade_level1.innerHTML = 'Intermediate'
            this.habilidade_level2.innerHTML = 'Intermediate'
            this.habilidade_level3.innerHTML = 'Intermediate'
            this.habilidade_level4.innerHTML = 'Basic'
            this.portfolio_titulo.innerText = 'Portfolio'
            this.vejamais1.innerHTML = 'See More'
            this.vejamais2.innerHTML = 'See More'
            this.educacao_titulo.innerHTML = 'Education'
            this.educacao_graduacao1.innerHTML = "Degree"
            this.educacao_graduacao2.innerHTML = "Certification"
            this.educacao_graduacao_info1.innerHTML = "Degree in Systems Analysis and Development - Senac Pelotas"
            this.educacao_graduacao_info2.innerHTML = "Programming logic course(40h) - Ifsul"
            this.footer_p1.innerHTML = '??Developed by Lineu Lima.'
            this.footer_p2.innerHTML = 'All rights reserved ??'
        }
     
        if (el.classList.contains('brasil')) {
            this.inglaterra.classList.remove('ativo')
            this.brasil.classList.add('ativo')
            this.nav1.innerHTML = 'Sobre'
            this.nav2.innerHTML = 'Habilidades'
            this.nav3.innerHTML = 'Portf??lio'
            this.nav4.innerHTML = 'Educa????o'
            this.profissao.innerHTML = 'Desenvolvedor Front-end'
            this.contatar.innerHTML = 'Contate-me'
            this.sobre_titulo.innerHTML = 'Sobre mim'
            this.sobre_para1.innerHTML = 'Sou muito dedicado em evoluir meus conhecimentos na ??rea, al??m de me testar constantemente com desafios, estou procurando oportunidades para come??ar minha carreira e desenvolver minhas habilidades na pr??tica.'
            this.sobre_para2.innerHTML = 'Apaixonado por filosofia,tecnologia e inova????o.'
            this.sobre_info_titulo.innerHTML = 'Informa????es B??sicas'
            this.sobre_info_p1.innerHTML = 'IDADE'
            this.sobre_info_p2.innerHTML = 'EMAIL:'
            this.sobre_info_p3.innerHTML = 'FONE:'
            this.sobre_info_p4.innerHTML =  'ENDERE??O:'
            this.sobre_info_p5.innerHTML = 'IDIOMA:'
            this.sobre_resp_p1.innerHTML = '25'
            this.sobre_resp_p2.innerHTML = 'lineulima1@gmail.com'
            this.sobre_resp_p3.innerHTML = '53 999769180'
            this.sobre_resp_p4.innerHTML = 'Pelotas, Rio Grande do Sul'
            this.sobre_resp_p5.innerHTML = 'Ingl??s(Intermedi??rio), Portugu??s'
            this.habilidade_titulo.innerHTML = 'Habilidades Profissionais'
            this.habilidade_level1.innerHTML = 'Intermedi??rio'
            this.habilidade_level2.innerHTML = 'Intermedi??rio'
            this.habilidade_level3.innerHTML = 'Intermedi??rio'
            this.habilidade_level4.innerHTML = 'B??sico'
            this.portfolio_titulo.innerText = 'Portf??lio'
            this.vejamais1.innerHTML = 'Veja Pronto'
            this.vejamais2.innerHTML = 'Veja Pronto'
            this.educacao_titulo.innerHTML = 'Educa????o'
            this.educacao_graduacao1.innerHTML = "Gradua????o"
            this.educacao_graduacao2.innerHTML = "Certifica????o"
            this.educacao_graduacao_info1.innerHTML = "Gradua????o em An??lise e Desenvolvimento de Sistemas - Senac Pelotas"
            this.educacao_graduacao_info2.innerHTML = "Curso de L??gica de Programa????o(40h) - Ifsul"
            this.footer_p1.innerHTML = '??Desenvolvido por Lineu Lima.'
            this.footer_p2.innerHTML = 'Todos direitos resevados ??'
        }
         if(el.classList.contains('link1')) {
             el.classList.add('ativo')
             this.nav2.classList.remove('ativo')
             this.nav3.classList.remove('ativo')
             this.nav4.classList.remove('ativo')
         }
         if(el.classList.contains('link2')) {
            el.classList.add('ativo')
            this.nav1.classList.remove('ativo')
            this.nav3.classList.remove('ativo')
            this.nav4.classList.remove('ativo')
        }
        if(el.classList.contains('link3')) {
            el.classList.add('ativo')
            this.nav1.classList.remove('ativo')
            this.nav2.classList.remove('ativo')
            this.nav4.classList.remove('ativo')
        }
        if(el.classList.contains('link4')) {
            el.classList.add('ativo')
            this.nav1.classList.remove('ativo')
            this.nav2.classList.remove('ativo')
            this.nav3.classList.remove('ativo')
        }
        }
        );
      };
      
}

const english = new English();
english.inicia()
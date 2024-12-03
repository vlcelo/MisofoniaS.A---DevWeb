new Vue({
    el: '#app',
    data: {
        view: 'home',
        dropdowns: {
            alarmes: false,
            caixas: false,
        },
    },
    methods: {
        toggleDropdown(menu) {
            this.dropdowns[menu] = !this.dropdowns[menu];
        },
    },
    components: {
        home: {
            template: `
                <section class="home-section">
            <div class="hero">
                <h1>Bem-vindo à Misofonia Inc.!</h1>
                <p>
                    Onde irritar é uma arte! Criamos experiências sonoras únicas, para transformar sons
                    irritantes em pura diversão. Prepare-se para conhecer produtos que vão redefinir sua percepção de barulho.
                </p>
                <button @click="$root.view = 'sobre'" class="cta-button">Saiba Mais</button>
            </div>
            
            <div class="features">
                <h2>Por que escolher a Misofonia Inc.?</h2>
                <div class="feature-grid">
                    <div class="feature-item">
                        <img src="/imagens/caixa.png" alt="Caos Sonoro">
                        <h3>Produtos Exclusivos</h3>
                        <p>Oferecemos alarmes e caixas de som projetados para levar o caos até você, com design exclusivo.</p>
                    </div>
                    <div class="feature-item">
                        <img src="/imagens/raiva.png" alt="Diversão">
                        <h3>Raiva Garantida</h3>
                        <p>Perfeito para brincadeiras e ocasiões onde irritar é o objetivo principal.</p>
                    </div>
                    <div class="feature-item">
                        <img src="/imagens/buda.png" alt="Impacto Único">
                        <h3>Impacto Único</h3>
                        <p>Criamos experiências sonoras que as pessoas jamais esquecerão!</p>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h2>Pronto para explorar?</h2>
                <p>
                    Descubra nossos produtos e leve sua criatividade (e paciência) a novos níveis.
                </p>
                <button @click="$root.view = 'soundCatalogo'" class="cta-button">Conheça o Catálogo</button>
            </div>
        </section>
            `,
        },
        sobre: {
            template: `
                <section>
                    <h2>Como começou?</h2>
                    <p>A Misofonia Inc. surgiu em 2020, quando dois amigos, Lucas e Ana, compartilharam uma conversa descontraída sobre como certos sons eram insuportavelmente irritantes. A ideia começou como uma piada: "E se criássemos algo que transformasse esses sons em um produto intencional?" 
                    <p>O que começou como brincadeira evoluiu para um conceito sério quando eles perceberam que, em meio ao caos do mundo, há um público disposto a pagar por experiências sonoras únicas – fosse para diversão ou até para trollar os amigos.

                    <h2>Nosso Primeiro Projeto</h2>
                    <p>Nosso primeiro produto foi o "Alarme Aleatório Deluxe", um dispositivo que tocava sons imprevisíveis, como buzinas, crianças chorando e até latidos de cães, em horários totalmente aleatórios. O protótipo inicial foi tão caótico que um dos vizinhos de Lucas pediu para ele “jogar isso no lixo”. Esse foi o primeiro sinal de que o produto estava no caminho certo. 
                    <p>Após ajustes e testes (que incluíram enlouquecer o escritório todo), o Alarme Aleatório foi lançado e rapidamente ganhou popularidade entre pessoas que buscavam um toque de humor e caos no dia a dia.

                    <h2>O Sucesso</h2>
                    <p>O sucesso veio quando um vídeo de Ana demonstrando o Alarme Aleatório viralizou nas redes sociais. O clipe mostrava o dispositivo disparando um som de corneta no meio de uma reunião online. A reação hilária garantiu milhões de visualizações e impulsionou as vendas. 
                    Em poucos meses, a Misofonia Inc. saiu do quintal de Lucas para um pequeno escritório e, logo depois, um espaço maior equipado com especialistas em criar “o som perfeito para irritar.”
                   
                    <h2>Nossa Missão</h2>
                    <p>Transformar o ordinário em extraordinário. Nós acreditamos que até os sons mais irritantes têm o poder de provocar emoções, reflexões e, claro, boas risadas. 
                    Queremos desafiar as pessoas a saírem da zona de conforto sonoro e abraçarem a imprevisibilidade do caos.

                    <h2>O futuro da Misofonia Inc</h2>
                    <p>O que vem a seguir? Estamos explorando novas fronteiras, como caixas de som que interagem com o ambiente, alarmes personalizados para pegadinhas e até experiências imersivas para ambientes corporativos (sim, isso mesmo). 
                    <p>Porque, afinal, irritar é uma arte, e a Misofonia Inc. continua inovando nessa direção.<br>

                <a id="contatoSobre"><h2>Entre em contato conosco!</h2></a>
                </section>
            `,
        },
        contato: {
            template: `
                <section>
                    <h2>Contato</h2>
                    <p>Preencha o formulário abaixo para entrar em contato:</p>
                    <form>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email">

                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </section>
            `,
        },
        alarmCatalogo: {
            template: `
                <section>
                    <h2>Catálogo de Alarmes</h2>
                    <div class="catalogo">
                        <div class="item" v-for="alarm in alarms" :key="alarm.name">
                            <img :src="alarm.img" :alt="alarm.name">
                            <h3>{{ alarm.name }}</h3>
                            <p>{{ alarm.description }}</p>
                            <button @click="alert('Você visualizou o ' + alarm.name)">Visualizar Produto</button>
                        </div>
                    </div>
                </section>
            `,
            data() {
                return {
                    alarms: [
                        {
                            name: "Alarmes Aleatórios",
                            description: "10 alarmes sincronizados tocando aleatoriamente em sua casa.",
                            img: "/imagens/15.png",
                        },
                        {
                            name: "Alarmes Infinitos",
                            description: "10 alarmes pela sua casa, nunca desligam, para você poder relaxar enquanto sua mulher grita com você.",
                            img: "/imagens/16.png",
                        },
                        {
                            name: "Alarmes Selvagens",
                            description: "10 alarmes pela sua casa com sons de animais silvestres gritando incontrolavelmente",
                            img: "/imagens/17.png",
                        },
                        {
                            name: "Alarmes Jumpscare",
                            description: "10 alarmes que ativam nas horas mais tenebrosas da noite pra te assustar (bom teste cardíaco).",
                            img: "/imagens/18.png",
                        },
                        {
                            name: "Alarmes Trono",
                            description: "5 alarmes para seu banheiro para irritar sua defecação ou banho para nn demorar no banheiro.",
                            img: "/imagens/19.png",
                        },
                        {
                            name: "Alarme Mosquito",
                            description: "10 alarmes espalhados pela casa fazendo sons de mosquitos no seu ouvido.",
                            img: "/imagens/20.png",
                        },                    
                    ],
                };
            },
        },
        alarmPlano: {
            template: `
                <section>
                    <h2>Planos de Alarmes</h2>
                    <div class="catalogo">
                        <div class="item" v-for="plan in plans" :key="plan.name">
                            <img :src="plan.img" :alt="plan.name">
                            <h3>{{ plan.name }}</h3>
                            <p>{{ plan.description }}</p>
                            <button @click="alert('Você visualizou o ' + plan.name)">Visualizar Plano</button>
                        </div>
                    </div>
                </section>
            `,
            data() {
                return {
                    plans: [
                        {
                            name: "Plano Básico",
                            description: "Inclui 2 alarmes chatos pra ca*****, com sons de criança chorando diários em horários randomizados.",
                            img: "/imagens/2.png",
                        },
                        {
                            name: "Plano Avançado",
                            description: "Inclui 5 alarmes infernais diários com sons variados.",
                            img: "/imagens/3.png",
                        },
                        {
                            name: "Plano Premium",
                            description: "Alarmes personalizados e ilimitados (mas a qualquer momento rs).",
                            img: "/imagens/4.png",
                        },
                        {
                            name: "Plano Coringação",
                            description: "Inclui 8 alarmes diários com sons mais altos que um show de rock q vão te fazer coringar.",
                            img: "/imagens/5.png",
                        },
                        {
                            name: "Plano 'mano quer um psicólogo?'",
                            description: "Inclui 78!!!!! alarmes diários aleatórios com sons de esmiril.",
                            img: "/imagens/6.png",
                        },
                        {
                            name: "Plano Buda",
                            description: "Inclui 900 alarmes diários com sons variados para você testar sua paciência e artingir o nirvana de paz.",
                            img: "/imagens/7.png",
                        },
                        
                    ],
                };
            },
        },
        soundCatalogo: {
            template: `
                <section>
                    <h2>Catálogo de Caixas de Som</h2>
                    <div class="catalogo">
                        <div class="item" v-for="sound in sounds" :key="sound.name">
                            <img :src="sound.img" :alt="sound.name">
                            <h3>{{ sound.name }}</h3>
                            <p>{{ sound.description }}</p>
                            <button @click="alert('Você visualizou o ' + sound.name)">Visualizar Produto</button>
                        </div>
                    </div>
                </section>
            `,
            data() {
                return {
                    sounds: [
                        {
                            name: "Caixa 'Socorro Não Para'",
                            description: "Toca músicas de karaokê desafinadas 24/7 sem interrupções.",
                            img: "/imagens/21.png",
                        },
                        {
                            name: "Caixa Hipnotizante",
                            description: "Reproduz sons de pingos d'água sincronizados com gemidos de baleia, perfeito para confundir sua mente.",
                            img: "/imagens/22.png",
                        },
                        {
                            name: "Caixa Explosiva",
                            description: "Solta estouros de fogos de artifício aleatórios durante a madrugada. Boa sorte com os vizinhos!",
                            img: "/imagens/23.png",
                        },
                        {
                            name: "Caixa 'Voz da Consciência'",
                            description: "Toca frases motivacionais perturbadoras com eco infinito.",
                            img: "/imagens/24.png",
                        },
                        {
                            name: "Caixa Frenética",
                            description: "Mistura batidas eletrônicas de festas rave com o som de uma furadeira. Bate cabeça garantido.",
                            img: "/imagens/25.png",
                        },
                        {
                            name: "Caixa 'Desperta Monstros'",
                            description: "Faz o som de passos e barulhos estranhos na sua casa. Perfeito para criar tensão.",
                            img: "/imagens/26.png",
                        },
                    ],
                };
            },
        },
        soundPlano: {
            template: `
                <section>
                    <h2>Planos de Caixas de Som</h2>
                    <div class="catalogo">
                        <div class="item" v-for="plan in plans" :key="plan.name">
                            <img :src="plan.img" :alt="plan.name">
                            <h3>{{ plan.name }}</h3>
                            <p>{{ plan.description }}</p>
                            <button @click="alert('Você visualizou o ' + plan.name)">Visualizar Plano</button>
                        </div>
                    </div>
                </section>
            `,
            data() {
                return {
                    plans: [
                        {
                            name: "Plano Compacto",
                            description: "Uma caixa com 2 sons irritantes: relógio de parede desregulado e cachorro latindo à distância.",
                            img: "/imagens/8.png",
                        },
                        {
                            name: "Plano Dueto do Desespero",
                            description: "Duas caixas que alternam entre som de liquidificador e grito de tarzan. Sincronização garantida para te enlouquecer.",
                            img: "/imagens/9.png",
                        },
                        {
                            name: "Plano Festa Surreal",
                            description: "Múltiplas caixas com uma mistura de buzinas de vuvuzela e gemidos de golfinho. A pista de dança nunca será a mesma.",
                            img: "/imagens/10.png",
                        },
                        {
                            name: "Plano Sinfonia Caótica",
                            description: "Duas caixas em perfeita desarmonia tocando marchas de fanfarra e batedeira de bolo.",
                            img: "/imagens/11.png",
                        },
                        {
                            name: "Plano Eco Infinito",
                            description: "Duas caixas sincronizadas que repetem eco de vozes como se você estivesse perdido em um canyon.",
                            img: "/imagens/12.png",
                        },
                        {
                            name: "Plano Orquestra do Apocalipse",
                            description: "Duas caixas que alternam entre sirenes de emergência e gritos de trovão. A experiência definitiva.",
                            img: "/imagens/13.png",
                        },
                    ],
                };
            },
        },
    },
});

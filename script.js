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
                <section>
                    <h2>Bem-vindo à Misofonia Inc.!</h2>
                    <p>Na Misofonia Inc., irritar é uma arte. Oferecemos produtos especialmente projetados para aqueles que desejam experiências sonoras que desafiam a paciência.</p>
                    <p>Nossos alarmes e caixas de som são perfeitos para trotes, piadas ou para testar os limites de sua sanidade. Prepare-se para o inesperado!</p>
                    <button @click="$root.view = 'sobre'">Saiba Mais</button>
                </section>
            `,
        },
        sobre: {
            template: `
                <section>
                    <h2>Sobre Nós</h2>
                    <p>A Misofonia Inc. nasceu da ideia de transformar ruídos irritantes em experiências inesquecíveis. Somos pioneiros no mercado de produtos sonoros que fogem do convencional.</p>
                    <p>Com uma equipe dedicada e muita criatividade, desenvolvemos alarmes que tocam em momentos aleatórios e caixas de som que só emitem os sons mais incômodos do dia a dia. Nossa missão? Tornar o mundo mais... sonoramente desafiador!</p>
                </section>
            `,
        },
        contato: {
            template: `
                <section>
                    <h2>Contato</h2>
                    <p>Tem alguma dúvida ou sugestão? Entre em contato conosco!</p>
                    <form>
                        <label for="nome">Nome:</label><br />
                        <input type="text" id="nome" name="nome" /><br />
                        <label for="mensagem">Mensagem:</label><br />
                        <textarea id="mensagem" name="mensagem" rows="4"></textarea><br />
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
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Alarme+1" alt="Alarme 1" />
                            <h3>Alarme Aleatório Deluxe</h3>
                            <p>10 alarmes sincronizados tocando aleatoriamente em sua casa.</p>
                            <button @click="alert('Você visualizou o Alarme Aleatório Deluxe')">Visualizar Produto</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Alarme+2" alt="Alarme 2" />
                            <h3>Alarme Noturno</h3>
                            <p>Alarmes tocando entre 2h e 4h da madrugada. Totalmente imprevisível!</p>
                            <button @click="alert('Você visualizou o Alarme Noturno')">Visualizar Produto</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Alarme+3" alt="Alarme 3" />
                            <h3>Alarme Caótico</h3>
                            <p>Sonoridades aleatórias para surpreender você e seus vizinhos.</p>
                            <button @click="alert('Você visualizou o Alarme Caótico')">Visualizar Produto</button>
                        </div>
                    </div>
                </section>
            `,
        },
        alarmPlano: {
            template: `
                <section>
                    <h2>Planos de Alarmes</h2>
                    <div class="catalogo">
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Plano+1" alt="Plano 1" />
                            <h3>Plano Básico</h3>
                            <p>Inclui 2 alarmes diários em horários randomizados.</p>
                            <button @click="alert('Você visualizou o Plano Básico')">Visualizar Plano</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Plano+2" alt="Plano 2" />
                            <h3>Plano Hardcore</h3>
                            <p>10 alarmes sincronizados para um caos total.</p>
                            <button @click="alert('Você visualizou o Plano Hardcore')">Visualizar Plano</button>
                        </div>
                    </div>
                </section>
            `,
        },
        soundCatalogo: {
            template: `
                <section>
                    <h2>Catálogo de Caixas de Som</h2>
                    <div class="catalogo">
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Caixa+1" alt="Caixa 1" />
                            <h3>Caixa "Bipe Sem Fim"</h3>
                            <p>Emite um bipe constante e sem fim, perfeito para desorientar.</p>
                            <button @click="alert('Você visualizou a Caixa "Bipe Sem Fim"')">Visualizar Produto</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Caixa+2" alt="Caixa 2" />
                            <h3>Caixa "Som Mastigação Intensificada"</h3>
                            <p>Emite sons de mastigação intensos e amplificados.</p>
                            <button @click="alert('Você visualizou a Caixa "Som Mastigação Intensificada"')">Visualizar Produto</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Caixa+3" alt="Caixa 3" />
                            <h3>Caixa "Barulho Fantasma"</h3>
                            <p>Emite sons misteriosos e assustadores à noite.</p>
                            <button @click="alert('Você visualizou a Caixa "Barulho Fantasma"')">Visualizar Produto</button>
                        </div>
                    </div>
                </section>
            `,
        },
        soundPlano: {
            template: `
                <section>
                    <h2>Planos de Caixas de Som</h2>
                    <div class="catalogo">
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Plano+1" alt="Plano 1" />
                            <h3>Plano Básico</h3>
                            <p>Inclui uma caixa de som com 3 tipos de sons aleatórios.</p>
                            <button @click="alert('Você visualizou o Plano Básico')">Visualizar Plano</button>
                        </div>
                        <div class="item">
                            <img src="https://via.placeholder.com/250x250/FF5733/FFFFFF?text=Plano+2" alt="Plano 2" />
                            <h3>Plano Randomizer</h3>
                            <p>Plano premium com sons aleatórios ilimitados e variações.</p>
                            <button @click="alert('Você visualizou o Plano Randomizer')">Visualizar Plano</button>
                        </div>
                    </div>
                </section>
            `,
        },
    },
});

// Vida Plus - Sistema de Gestão Hospitalar

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar.is-primary');
    
    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }

    // Fechar menu ao clicar em um item em dispositivos móveis
    const menuItems = document.querySelectorAll('.navbar-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                burger.classList.remove('is-active');
                menu.classList.remove('is-active');
            }
        });
    });

    // Notificações
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification is-${type}`;
        notification.innerHTML = `
            <button class="delete"></button>
            ${message}
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove após 5 segundos
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Botão de fechar
        notification.querySelector('.delete').addEventListener('click', () => {
            notification.remove();
        });
    }

    // Validação de formulários
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-danger');
                
                // Adiciona mensagem de erro
                const errorMessage = document.createElement('p');
                errorMessage.className = 'help is-danger';
                errorMessage.textContent = 'Este campo é obrigatório';
                
                const parent = input.parentElement;
                if (!parent.querySelector('.help.is-danger')) {
                    parent.appendChild(errorMessage);
                }
            } else {
                input.classList.remove('is-danger');
                const errorMessage = input.parentElement.querySelector('.help.is-danger');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });

        return isValid;
    }

    // Sistema de autenticação básico
    const auth = {
        isAuthenticated: false,
        user: null,

        login: function(credentials) {
            // Simulação de autenticação
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (credentials.username && credentials.password) {
                        this.isAuthenticated = true;
                        this.user = {
                            username: credentials.username,
                            role: 'user'
                        };
                        resolve(this.user);
                    } else {
                        reject(new Error('Credenciais inválidas'));
                    }
                }, 1000);
            });
        },

        logout: function() {
            this.isAuthenticated = false;
            this.user = null;
            window.location.href = '/login.html';
        }
    };

    // Exporta funções para uso global
    window.vidaPlus = {
        showNotification,
        validateForm,
        auth
    };
}); 
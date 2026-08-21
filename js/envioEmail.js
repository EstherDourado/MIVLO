
emailjs.init("X3V0LsxeybMt3sxZT");

document.getElementById("contato_form").addEventListener("submit",function(event){
    event.preventDefault(); // Impede recarregamento da página

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        assunto: "Solicitação de Proposta - MIVLO",
        // pacote: document.getElementById('pacote').value,
        contato: document.getElementById('contato').value,
        mensagem: document.getElementById('mensagem').value
    } 

    console.table(formData); // Para depuração, mostra os dados do formulário no console

    const serviceID = "service_2t1qmzg";
    const tamplateID ="template_1vjsdqs";
    
    const submitButton = document.getElementById("submit_button");
    
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceID, tamplateID, formData).then(()=>{

            Toastify({
                text: "E-mail enviado com sucesso",
                duration: 4000,
                style:{
                    background: "linear-gradient(45deg, #b06ab3, #4568dc)",
                    color: "#fffff"
                }
            }).showToast();

            document.getElementById("contato_form").reset();
        }).catch((error)=>{
            Toastify({
                text: "Erro ao tentar enviar e-mail",
                duration: 4000,
                style:{
                    background: "#b06ab3",
                    color: "#fffff"
                }
            }).showToast();

        }).finally(()=>{
            submitButton.textContent = "Solicitar proposta";
            submitButton.disabled = false;
        }) 
});
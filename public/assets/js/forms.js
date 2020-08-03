const validateField =(field, message) => {
    if(!field.value && field.value.trim() == ""){
        alert(message)
        return false
    }

    return true    
                
}

const validateNotice = (form) => {
    return validateField(form.email, "Email deve ser informado") && 
        validateField(form.descricao, "Descrição deve ser informada") &&
        validateField(form.titulo, "Título deve ser informado") && 
        validateField(form.cidade, "A cidade deve ser informada")
}

const validadeSearch = (form) => {
    return validateField(form.key,"Informe o que deseja buscar")
}
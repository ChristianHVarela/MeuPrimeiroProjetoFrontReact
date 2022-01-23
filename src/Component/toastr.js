import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

export function viewMessage(title, message, type){
    toastr[type](message, title)
}

export function messageError(message){
    viewMessage('Erro', message, 'error')
}

export function messageSuccess(message){
    viewMessage('Sucesso', message, 'success')
}

export function messageAlert(message){
    viewMessage('Alerta', message, 'warning')
}
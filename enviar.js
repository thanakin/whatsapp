function enviar (){
    let query;
    let url = 'https://api.whatsapp.com/send?phone=' + query

    fetch(url)
        .then(data => data.text('teste'))
        .then((text) => {
            console.log('request succeeded with JSON response', text)
            }).catch(function (error) {
                console.log('request failed', error)
            })
}
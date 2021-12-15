function initialize(pk) {
    axios.get('/accounts/' + pk )
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('username').value = response.data['username'];
            document.getElementById('email').value = response.data['email'];

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function update_account(pk) {
    axios.patch('/accounts/' + pk, {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
    } )
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/accounts/retrieve_template/' + pk;
        })
        .catch(function (error) {
            // handle error
            console.log(error);

            if(error.response.status === 401) {
            document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>인증 정보가 없어요!</div>"
            } else if(error.response.status === 403) {
            document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>권한이 없어요!</div>"
            } else {
            document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>업데이트 실패!</div>"
            }
        })
        .then(function () {
            // always executed
        });
}
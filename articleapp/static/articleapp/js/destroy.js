
function delete_article(pk) {
    axios({
        method: 'delete',
        url: '/articles/' + pk,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/accounts/hello_world_template/';
        })
        .catch(function (error) {
            // handle error
            console.log(error);

            if (error.response.status === 401) {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>인증 정보가 없어요!</div>"
            } else if (error.response.status === 403) {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>권한이 없어요!</div>"
            } else {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>게시글 삭제 실패!</div>"
            }

        })
        .then(function () {
            // always executed
        });
}
function carga ( n){
        fetch('https://reqres.in/api/users/' + n)
        .then((resp)=> resp.json())
        .then((obj)=>carregaImagem(obj.data.avatar))
        .catch(e=>console.log(erro));

    }

function carregaImagem(avatar){
    fetch(avatar)
    .then(resp => resp.blob())
    .then((b)=> imagem.src = URL.createObjectURL(b))
    .catch(e=>console.log(erro));
}
    output.innerHTML = ` 
    <p><input id="idUser"  type="number" value="0" /> <button id="btn">Ver avatar</button> </p>
        <p> <img  id="imagem"/>
        </p>
    `;

    btn.onClick = () => carga(idUser.value);

carga(2);
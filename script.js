document.getElemetnById("root").append(
    FueJs.createElement('div', {
        className: 'box'
    }, [
        FueJs.createElement('h1', {
            style: ''
        },  "گنجه"),
        FueJs.createElement('h2', {
            style: ''
        }, "ورود به حساب کاربری"),
        
        
        FueJs.createElement('input', {
            className: 'input1',
            placeholder: 'نام کاربری'
        }),
        FueJs.createElement('input', {
            className: 'input2',
            placeholder: 'رمز عبور'
        }),
        FueJs.createElement('a', {
        },[
            FueJs.createElement('button',{
            className: 'button1'},
            "ورود"),
            FueJs.createElement('label',{
                style:''},
                "ورود"),
            [
                FueJs.createElement('input', {
                    style:'',
                    name: 'remember'}),
            ]
            FueJs.createElement('a',{

            },
            [
                FueJs.createElement('p',{
                style:''
            }, 'رمز خود را فراموش کردید؟')
            ]
            ),
        ]),
        FueJs.createElement('a', {
        },[
            FueJs.createElement('img', {
                src: './images/icon.jpg'}),
        ]),
        
    ])
)
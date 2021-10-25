// Составьте конспект о том как работает подъем состояния(lifting up) о том что такое controlled component ? Что такое тупая или умная компонента ?
// Опиши своими словами 
// 

// lifting up
/*
баласынын ичиндеги данныйларды атасынын ичинде колдонобуз.
мисалы

 //lifting up method
    //создание метод(функция)колбек катары берилсе Handler деген окончаниясы менен болсо жакшы болот,эми <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} /> ExpenseForm га колбек функциябызды берип жатабыз(onSaveExpenseData)а бул озуно props ту алат экен
    const saveExpenseDataHundler = (enteredExpenseData) => {
        console.log(enteredExpenseData);//мени ExpenseForm чакырып жатат бирок мен NewExpense тин ичинде аткарылам,тоист колбек функция кайсы жерде болсо ошол жерде аткарылат ExpenseFormдун ичинде чакырылган себеби expenseData деген обьекти алыш учун гана. 

         const expenseData = {
            ...enteredExpenseData,
            //биз data деген обьектибиз enteredExpenseData болуп келип жатат аны биз spread оператор мн копи кылып алдык анда title:amaunt:date:3свойство бар и обьектибизге дагы бир свойство коштук id 
             id: Math.random().toString(),
             //11112 санды чыгарып бериши мумкун и аны toString кылабыз.Эми ушул expenseData обьектибизди App.js ке беришибиз керек

        }
 // отправляем данные формы как объект в App.js по мере обновления там нового массива расходов
         props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;

Состояниеси бар компонент болсо ал умная компонент болот ал жок болсо тупая болот.
что такое controlled component ?
родителский компонентанын ичинде бир компонента бар бирок ал компонентанын состояниясын ошол родителскии компонент башкарса Контролдук компонете деп аталат.
 */
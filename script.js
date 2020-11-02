//keep the state
const appState = {
    current_question: 1
    
}


document.addEventListener('DOMContentLoaded', () => {

    create_question_view()

    document.querySelector("#app_widget").onclick = (e) => {
        handle_userChoice(e)
    }

});

const handle_userChoice = (e) => {

    console.log(e.target)


}


const create_question_view = async () => {

    const data = await fetch("https://my-json-server.typicode.com/kiowesmith21/project3-quizapp/db")
    const model = await data.json()
    const html_element = render_view(model, '#question_view')
    document.querySelector("#app_widget").innerHTML = html_element;

}

const render_view = (model, view) => {

    template_source = document.querySelector(view).innerHTML

    //handlbars compiles above source into a template
    var template = Handlebars.compile(template_source);

    console.log(model)

    //add appstate parameter?
    var html_widget_element = template(model);
    console.log(html_widget_element)

    return html_widget_element

}
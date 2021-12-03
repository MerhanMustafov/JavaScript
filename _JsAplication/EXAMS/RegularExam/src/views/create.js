import { createCar } from "../api/data.js";
import { html } from "../lib.js";


const createTemplate = (onSubmit) => html`

`;


export function createPage(ctx){
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)

        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        const year = Number(formData.get('year'));
        const imageUrl = formData.get('imageUrl');
        const price = Number(formData.get('price'));

        try{
            if(!brand || !model || !description || !year || !imageUrl || !price){
                throw new Error ('all fields are required')
            }
            if (year < 0 || price < 0){
                throw new Error ('price and year must be positive numbers')
            }

            const data = {brand, model, description, year, imageUrl, price}
            await createCar(data)
            ctx.page.redirect('/all-listings')

        }catch (err) {
            alert(err.message);
        }


    }
}
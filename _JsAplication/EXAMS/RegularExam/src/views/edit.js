import { editCar, getCarById } from "../api/data.js";
import { html } from "../lib.js";


const editTemplate = () => html`

`;


export async function editPage(ctx){
    const car = await getCarById(ctx.params.id)

    ctx.render(editTemplate())

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
            const id = ctx.params.id; const data = {brand, model, description, year, imageUrl, price}
            await editCar(id, data)
            ctx.page.redirect(`/details/${ctx.params.id}`)

        }catch (err) {
            alert(err.message);
        }
    }
}
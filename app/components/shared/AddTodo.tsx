import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button"

const AddTodo = () => {
    return (
        <Form className="w-1/2 n-auto">
            <div className="flex">
                <Input 
                name="=input"
                type="text"
                placeholder="add Todo..."
                />
                <Button 
                type="submit"
                text="Add"
                />
            </div>
        </Form>
    )
};

export default AddTodo;
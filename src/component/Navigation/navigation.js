import {UserMoneyDisplay} from "./User/components/UserMoneyDisplay"
import {UserShortDisplay} from "./User/components/UserShortDisplay"

export const Navigation = (props)=>{

    return (
        <><div>
            <UserMoneyDisplay
                id={props.id}
                surname={props.surname}
                lastname={props.lastname}
                login={props.login}
                pwd={props.pwd}
                money={props.money}
            ></UserMoneyDisplay>
        </div><div>

            </div><div>
                <UserShortDisplay
                    id={props.id}
                    surname={props.surname}
                    lastname={props.lastname}
                    login={props.login}
                    pwd={props.pwd}
                    money={props.money}
                ></UserShortDisplay>
            </div></>

    );
}
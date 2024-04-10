import { FieldValues } from "react-hook-form"
import AppToast from "../../../../utils/AppToast";

export interface ISubmitModeCreation {
    entity: "competenceGroup" | "competence",
    action: "create" | "edit",
    service: any,
    feedback: string
}

export class SubmitMode {
    public entity: "competenceGroup" | "competence";
    public action: "create" | "edit";
    public callback: (id:string) => (data:FieldValues) => Promise<void>

    public constructor(
        payload:ISubmitModeCreation,
        handleClose:() => void
    ) {
        this.entity = payload.entity
        this.action = payload.action
        this.callback = (id:string) => async (data:FieldValues) => {
            try {
                await payload.service(id, data)
                AppToast.notify(payload.feedback, "success")
                handleClose()
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            }
        }
    }
}

export class SubmitModeList {
    list: SubmitMode[] = []

    public constructor(
        payloads:ISubmitModeCreation[],
        handleClose:() => void
    ) {
        payloads.forEach(payload => {
            this.list.push(new SubmitMode(payload, handleClose))
        })
    }
}
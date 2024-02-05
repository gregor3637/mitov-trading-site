import React from 'react'
import InfoFormTypeWrapper from './InfoFormTypeWrapper'
import usePersonalInfoForm from '../../../hooks/usePersonalInfoForm'
import { Form } from 'react-router-dom'
import PageButton from '../PageButton'

const inputs = [
    {
        displayLabel: 'First Name',
        personalInfoPropName: 'firstName',
        ShowComponent: InfoFormTypeWrapper.View,
        EditComponent: InfoFormTypeWrapper.InputText,
    },
    {
        displayLabel: 'Last Name',
        personalInfoPropName: 'lastName',
        ShowComponent: InfoFormTypeWrapper.View,
        EditComponent: InfoFormTypeWrapper.InputText,
    },
    {
        displayLabel: 'Age',
        personalInfoPropName: 'age',
        ShowComponent: InfoFormTypeWrapper.View,
        EditComponent: InfoFormTypeWrapper.InputText,
    },
]

function PersonalForm({ userData, submitButtonLabel, isSubmitting }) {
    const [personalInfo, dispatch] = usePersonalInfoForm(userData)

    return (
        <div className="sm:h-screen">
            <Form
                method="post"
                className="flex flex-col items-center gap-10"
                replace
            >
                <div className="mx-auto flex max-w-max flex-col items-center justify-center gap-2 px-10">
                    {inputs.map(
                        ({
                            displayLabel,
                            personalInfoPropName,
                            ShowComponent,
                            EditComponent,
                        }) => {
                            return (
                                <InfoFormTypeWrapper
                                    key={personalInfoPropName}
                                    isReset={isSubmitting}
                                    displayLabel={displayLabel}
                                    show={
                                        <ShowComponent
                                            value={
                                                personalInfo[
                                                    personalInfoPropName
                                                ].value
                                            }
                                            isDisabled={isSubmitting}
                                        />
                                    }
                                    edit={
                                        <EditComponent
                                            formFieldName={personalInfoPropName}
                                            value={
                                                personalInfo[
                                                    personalInfoPropName
                                                ].value
                                            }
                                            onChange={(val) =>
                                                dispatch({
                                                    type: 'updateValue',
                                                    field: personalInfoPropName,
                                                    value: val,
                                                })
                                            }
                                            onCancel={() =>
                                                dispatch({
                                                    type: 'resetValue',
                                                    field: personalInfoPropName,
                                                })
                                            }
                                        />
                                    }
                                />
                            )
                        }
                    )}
                </div>
                <PageButton
                    label={submitButtonLabel}
                    disabled={isSubmitting || !personalInfo.isChanged}
                />
            </Form>
        </div>
    )
}

export default PersonalForm

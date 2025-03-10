import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { Price } from '../index';

import Styles from './PaymentTemplate.module.scss';

import { PaymentTemplateProps } from './types';

import Icons from './Icons';

const PaymentTemplate = (props: PaymentTemplateProps) => {
    const {
        icon,
        index,
        title,
        amount,
        balance,
        onClick,
        isChecked,
        balanceText,
        destination,
        openChildren,
        openedChildrens
    } = props;

    const [state, setState] = useState({
        id: index,
        isOpenTools: false,
    })

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        openChildren(state.id)
    };

    const onToggleTools = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setState(({ isOpenTools }) => {
            return {
                ...state,
                isOpenTools: !isOpenTools
            }
        })
    }

    const isOpenTools = state.isOpenTools || !!openedChildrens.length

    if (!!openedChildrens.length && state.isOpenTools) {
        setState(({ isOpenTools }) => {
            return {
                ...state,
                isOpenTools: false
            }
        })
    }

    return (
        <div className={Styles.templateWrapper + ` ${isOpenTools && Styles.open}`}>
            <div className={Styles.toolsWrapper}>
                <div className={Styles.tool}>
                    <Icons.Delete />
                </div>
                <div className={Styles.tool}>
                    <Icons.Edit />
                </div>
                <div className={Styles.tool}>
                    <Checkbox
                        checked={isChecked}
                        onChange={onCheck}
                        value="checkedA"
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                </div>
            </div>
            <div className={Styles.paymentTemplate} onClick={onClick}>
                <div className={Styles.image}>
                    <img src={icon} alt="service" />
                </div>
                <div className={Styles.information}>

                    <div className={Styles.title}>{title}</div>
                    <div className={Styles.destination}>{destination}</div>
                    <div className={Styles.amount}><Price>{amount}</Price>₼</div>
                    {balance && <div className={Styles.balance}>{balanceText} <span className={Styles.amount}><Price>{balance}</Price>₼</span></div>}
                </div>
                <div className={Styles.moreDots} onClick={onToggleTools}>
                    <Icons.More />
                </div>
            </div>
        </div>
    );
}

export default PaymentTemplate;


import React, { useState } from 'react';
import { TemplateListProps } from './types';

import { PaymentTemplate } from '@sola/ui';
import Styles from './TemplateList.module.scss';


const TemplateList = (props: TemplateListProps) => {
    const [openedChildrens, setOpenedChildrens] = useState([])

    const { templates, balanceText, deleteTemplate, editTemplate } = props;

    const openChildren = ( childrenId: number ) => {
        console.log( '@@ childrenId', childrenId)
        if (openedChildrens.includes(childrenId)) {
            setOpenedChildrens((openedChildrens: []) => {
                const arrCopy = [...openedChildrens]
                const indexToDel = arrCopy.findIndex(elem => elem == childrenId)
                arrCopy.splice(indexToDel, 1)
                return arrCopy
            })
        } else {
            setOpenedChildrens([ ...openedChildrens, childrenId])
        }
    }

    return (
        <div className={Styles.list}>
            {templates.map((template, index) => (
                <PaymentTemplate
                    index={index}
                    key={template.id}
                    icon={template.image}
                    title={template.title}
                    balanceText={balanceText}
                    onDelete={deleteTemplate}
                    onEdit={editTemplate}
                    balance={template.balance}
                    openChildren={openChildren}
                    openedChildrens={openedChildrens}
                    isChecked={openedChildrens.includes(index)}
                    // amount={template.details.amount}
                    // destination={template.details.receiverAccount}
                    // onClick={onClickTemplate}
                />
            ))}
        </div>
    );
}

export default TemplateList;
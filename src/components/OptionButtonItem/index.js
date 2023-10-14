import {OptionItemButton, OptionButtonImage} from './styledComponents'

const OptionButtonItem = props => {
  const {optionDetails, onSelectingChoiceButton} = props
  const {id, imageUrl, dataTestIdValue} = optionDetails

  const onClickingButton = () => {
    console.log('Button clicked')
    onSelectingChoiceButton(id)
  }

  return (
    <li>
      <OptionItemButton type="button" onClick={onClickingButton}>
        <OptionButtonImage src={imageUrl} data-testid={dataTestIdValue} />
      </OptionItemButton>
    </li>
  )
}

export default OptionButtonItem

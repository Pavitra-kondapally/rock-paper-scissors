import {OptionItemButton, OptionButtonImage} from './styledComponents'

const OptionButtonItem = props => {
  const {optionDetails, onSelectingChoiceButton} = props
  const {id, imageUrl, dataTestIdValue} = optionDetails

  const onClickingButton = () => {
    console.log(`Button is clicked with id ${id}`)
    onSelectingChoiceButton(id)
  }

  return (
    <OptionItemButton
      type="button"
      onClick={onClickingButton}
      data-testid={dataTestIdValue}
    >
      <OptionButtonImage src={imageUrl} alt={id} />
    </OptionItemButton>
  )
}

export default OptionButtonItem

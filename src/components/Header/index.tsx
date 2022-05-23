import { BiChevronRight } from 'react-icons/bi'
import * as S from './styles'

export const Header = () => {
    return (
        <S.Background>
            <S.Title>IP Address Tracker</S.Title>

            <S.ContainerInput>
                <S.Input
                    placeholder="Search for any IP address or domain"
                />
                <S.Button>
                    <BiChevronRight color='#fff' size={28} />
                </S.Button>
            </S.ContainerInput>
        </S.Background>
    )
}

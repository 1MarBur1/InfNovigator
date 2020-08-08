export type FontFamily = 'LibreBaskerville-Bold' | 'Montserrat-Bold' | 'Montserrat-SemiBold';

type FontProps = {
	fontFamily: FontFamily;
}

//families
export const LIBRE_BASKERVILLE_BOLD: FontProps = {
	fontFamily: 'LibreBaskerville-Bold',
};

export const MONTSERRAT_SEMIBOLD: FontProps = {
	fontFamily: 'Montserrat-SemiBold',
};

export const MONTSERRAT_BOLD: FontProps = {
	fontFamily: 'Montserrat-Bold',
};

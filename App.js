import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');

	function goalInputHandler(value) {
		console.log(value);
	}

	function addGoalHandler() {}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your Course Goal'
					onChangeText={goalInputHandler}
				></TextInput>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals..</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
	},
	goalsContainer: {
		flex: 5,
	},
});

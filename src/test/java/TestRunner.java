import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = {"src/main/resources/feature/"},

        glue = {"step_definitions","driverWrapper"},

        tags = {"@regression"},

        plugin = {"pretty", "html:Reports/Default"},

        // readable console logs
        monochrome = true,

        // This creates auto method name in camelCase
        snippets = SnippetType.CAMELCASE
)

public class TestRunner {
}

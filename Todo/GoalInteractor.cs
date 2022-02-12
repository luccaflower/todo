namespace todo;
public class GoalInteractor
{
    private GoalsStore goals;
    public GoalInteractor() : this(InMemoryGoals.Instance) { }
    public GoalInteractor(GoalsStore goals)
    {
        this.goals = goals;
    }

    public IEnumerable<Goal> getAll() => goals.getAll();

    public IEnumerable<Goal> add(Goal goal)
    {
        goal.Uuid = Guid.NewGuid();
        return goals.add(goal);
    }

    public IEnumerable<Goal> delete(Goal goal) => goals.delete(goal);
    public IEnumerable<Goal> deleteAll() => goals.deleteAll();
    public IEnumerable<Goal> complete(Goal goal)
    {
        goal.Accomplished = DateTime.Today;
        return goals.complete(goal);
    }
}
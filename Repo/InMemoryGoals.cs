using todo;

public class InMemoryGoals : GoalsStore
{
    private Dictionary<Guid, Goal> store;
    private static InMemoryGoals? _instance;
    public static InMemoryGoals Instance
    {
        get => _instance ??= new InMemoryGoals();
    }

    public InMemoryGoals()
    {
        store = new Dictionary<Guid, Goal>();
    }

    public IEnumerable<Goal> getAll() => store.Values;

    public IEnumerable<Goal> add(Goal goal)
    {
        store.Add(goal.Uuid!.Value, goal);
        return store.Values;
    }

    public IEnumerable<Goal> delete(Goal goal)
    {
        store.Remove(goal.Uuid!.Value);
        return store.Values;
    }

    public IEnumerable<Goal> deleteAll()
    {
        store.Clear();
        return store.Values;
    }

    public IEnumerable<Goal> complete(Goal goal)
    {
        store[goal.Uuid!.Value] = goal;
        return store.Values;
    }
}
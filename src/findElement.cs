using System;

public class FindElement
{
  /**
   * Find the first instance of an element that meets a specified condition in an array
   * @template T
   * @param {T[]} inputArray - [type T]
   * @param {(element: T) => boolean} condition - [a condition that will return a boolean expression when fed an element]
   * @returns {T|undefined} firstInstance <first instance of element in the array that meets condition>
   */
  public static T FindFirst<T>(T[] inputArray, Func<T, bool> condition)
  {
    foreach (T element in inputArray)
    {
      if (condition(element))
      {
        Console.WriteLine("Found element: " + element); // Added console log
        return element;
      }
    }
    return default(T);
  }
}

